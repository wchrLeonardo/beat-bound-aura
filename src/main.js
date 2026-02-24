import { PoseLandmarker, FilesetResolver, DrawingUtils } from "@mediapipe/tasks-vision";

// ========== REFERÊNCIAS DOS ELEMENTOS HTML ==========
const videoElement = document.getElementById('webcam');
const canvasElement = document.getElementById('output_canvas');
const statusElement = document.getElementById('status');
const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
const fpsElement = document.getElementById('fps');

// Configurar as dimensões do canvas para corresponder ao vídeo
canvasElement.width = 640;
canvasElement.height = 480;

// Inicializar contexto de desenho
const canvasCtx = canvasElement.getContext('2d');
const drawingUtils = new DrawingUtils(canvasCtx);

// ========== VARIÁVEIS GLOBAIS ==========
let poseLandmarker = undefined;
let webcamStream = null;
let isRunning = false;
let animationId = null;

// Variáveis para calcular FPS
let lastFrameTime = performance.now();
let fps = 0;
let frameCount = 0;

// ========== CARREGAR IA ==========
// Essa função será responsável por carregar a IA
async function createPoseLandmarker() {
  try {
    // O FilesetResolver busca os arquivos necessários na rede (WASM e modelos)
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    // Aqui inicializamos o marcador de pose com as nossas configurações
    poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task`,
        delegate: "GPU" // Forçamos o uso da placa de vídeo para ser mais rápido
      },
      runningMode: "VIDEO", // Essencial para processar frames em sequência
      numPoses: 1 // Queremos apenas uma pessoa (o jogador) na tela
    });
    
    console.log("✅ IA Carregada e pronta para o Aura Check!");
    
    // Atualizar status quando a IA estiver pronta
    if (statusElement.innerText.includes("Carregando IA")) {
      statusElement.innerText = "🎯 Aura detectada! Dance e se mova!";
    }
  } catch (error) {
    console.error("❌ Erro ao carregar IA:", error);
    statusElement.innerText = "❌ Erro ao carregar IA. Recarregue a página.";
    alert("Erro ao carregar o modelo de IA. Verifique sua conexão e recarregue a página.");
  }
}

createPoseLandmarker();

// ========== LOOP DE DETECÇÃO ==========
/**
 * Esta função roda em loop infinito (enquanto o jogo estiver ativo)
 */
async function predictWebcam() {
  if (!isRunning) return;

  // 1. Limpamos o canvas para desenhar o novo frame
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  // 2. Só processamos se a IA já estiver carregada e o vídeo pronto
  if (poseLandmarker !== undefined && videoElement.readyState >= 2) {
    let startTimeMs = performance.now();

    // 3. A IA lê o frame atual do elemento <video>
    const results = poseLandmarker.detectForVideo(videoElement, startTimeMs);

    // 4. Se a IA encontrou um corpo, vamos desenhá-lo!
    if (results.landmarks && results.landmarks.length > 0) {
      for (const landmark of results.landmarks) {
        // Desenha as conexões (linhas entre os pontos)
        drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS, {
          color: "#00FFCC", // Cor Neon para a nossa Aura
          lineWidth: 4
        });
        
        // Desenha os pontos individuais (articulações)
        drawingUtils.drawLandmarks(landmark, {
          color: "#FF00BB", // Rosa choque para destacar as articulações
          lineWidth: 2
        });
      }
    }

    // Calcular FPS
    frameCount++;
    const currentTime = performance.now();
    const delta = currentTime - lastFrameTime;
    
    if (delta >= 1000) { // Atualiza FPS a cada 1 segundo
      fps = Math.round((frameCount * 1000) / delta);
      frameCount = 0;
      lastFrameTime = currentTime;
      if (fpsElement) {
        fpsElement.innerText = `FPS: ${fps}`;
      }
    }
  }

  // 5. Chama a si mesma para criar o loop contínuo
  animationId = window.requestAnimationFrame(predictWebcam);
}

// ========== INICIALIZAÇÃO DA WEBCAM ==========
/**
 * Função assíncrona para inicializar a câmera.
 * Usamos 'async' porque o acesso ao hardware não é instantâneo.
 */
async function initWebcam() {
  statusElement.innerText = "Solicitando acesso à câmera...";

  try {
    /**
     * O navigator.mediaDevices.getUserMedia é o método padrão da Web 
     * para acessar dispositivos de entrada (vídeo e áudio).
     */
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 640,
        height: 480,
        facingMode: "user" // Garante o uso da câmera frontal em celulares
      },
      audio: false // Para o BBA, não precisamos do microfone agora
    });

    // 2. Conectamos o fluxo da câmera (stream) ao elemento de vídeo
    videoElement.srcObject = stream;
    webcamStream = stream;
    isRunning = true;

    // 3. Atualizamos a interface para o usuário
    statusElement.innerText = "✅ Câmera ativa! Carregando IA...";
    startBtn.style.display = "none"; // Esconde o botão após iniciar
    stopBtn.style.display = "inline-block"; // Mostra botão de parar
    if (fpsElement) {
      fpsElement.style.display = "block";
    }

    console.log("Stream da webcam iniciado com sucesso.");
  } catch (error) {
    // 4. Tratamento de erros (Ex: Usuário negou a permissão)
    console.error("Erro técnico ao acessar webcam:", error);
    statusElement.innerText = "❌ Erro: " + error.message;
    alert("Para o Beat Bound Aura funcionar, precisamos da sua câmera!");
  }
}

// ========== PARAR WEBCAM ==========
// Função para parar a webcam
function stopWebcam() {
  if (webcamStream) {
    // Para todas as tracks do stream
    webcamStream.getTracks().forEach(track => track.stop());
    videoElement.srcObject = null;
    webcamStream = null;
  }

  // Para a animação
  isRunning = false;
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  // Limpa o canvas
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  // Atualiza a interface
  statusElement.innerText = "Câmera desligada. Pronto para iniciar novamente!";
  startBtn.style.display = "inline-block";
  stopBtn.style.display = "none";
  if (fpsElement) {
    fpsElement.style.display = "none";
    fpsElement.innerText = "FPS: 0";
  }
  
  // Reseta contadores
  fps = 0;
  frameCount = 0;
  lastFrameTime = performance.now();
}

// ========== EVENT LISTENERS ==========
videoElement.addEventListener("loadeddata", predictWebcam);
startBtn.addEventListener('click', initWebcam);
stopBtn.addEventListener('click', stopWebcam);

// ========== RESPONSIVIDADE ==========
// Responsividade - Ajustar canvas ao redimensionar janela
function resizeCanvas() {
  const container = document.querySelector('.canvas-container');
  if (!container) return;

  const containerWidth = container.offsetWidth;
  const aspectRatio = 640 / 480;
  const newHeight = containerWidth / aspectRatio;

  container.style.height = `${newHeight}px`;
}

// Ajustar ao carregar e ao redimensionar
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);
