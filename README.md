# 🕺 Beat Bound Aura (BBA)

> "O seu corpo é o controle. Sincronize sua aura com a batida."

**Beat Bound Aura** é um jogo de ritmo baseado em visão computacional onde os jogadores utilizam o próprio corpo como controle. Através da webcam, o sistema mapeia os movimentos do jogador e os compara em tempo real com a coreografia ("beatmap") da música, aplicando feedbacks visuais de Aura Neon e processamento de áudio dinâmico (Filtros Low Pass) dependendo do desempenho (acertos ou erros).

---

## 🛠️ Stack Tecnológica

O ecossistema do projeto foi escolhido para maximizar a performance no navegador e escalar facilmente:

*   **Core:** Next.js 15+ (App Router) & TypeScript.
*   **UI/UX:** Tailwind CSS v4 (Zero-config) & Framer Motion (para micro-interações da HUD).
*   **IA/Vision:** MediaPipe Pose Landmarker (Mapeamento de 33 keypoints anatômicos, com execução acelerada via GPU local / WebAssembly no client-side).
*   **Audio Engine:** Web Audio API nativa (Processamento reativo em tempo real usando `BiquadFilterNode` para efeitos de abafamento sonoro).
*   **BaaS (Backend/DB):** Supabase (PostgreSQL para dados relacionais, Auth para gestão de jogadores e Storage para arquivos de áudio).
*   **Infra/Deploy:** Docker Standalone em ambiente Linux (EC2/GCP).

---

## 🏗️ Arquitetura do Frontend (Next.js)

O repositório segue uma arquitetura modularizada e escalável:

*   **`src/app/` (Rotas e Layouts):**
    *   `/`: Landing page de atração com design neon/glassmorphism e tipografia arrojada.
    *   `/login`: Fluxo de autenticação do jogador.
    *   `/dashboard`: Hub central pós-login. Utiliza um `layout.tsx` persistente (com background intergalático/neon e sidebar) que otimiza a performance e não recarrega o chassi enquanto o usuário navega entre as abas.
*   **`src/components/` (UI Modular):**
    *   Dividido logicamente por escopo: `dashboard/` (peças modulares de estatísticas, como os gráficos e cards), `game/` (onde o canvas da webcam e o renderer do jogo vão existir) e `ui/` (botões e modais compartilhados).
*   **`prev-att/` (Legacy Proof of Concept):**
    *   Mantém o protótipo inicial em JavaScript puro. Ele valida a viabilidade de detecção do MediaPipe associada ao áudio reativo com delay <0.1s. Este código legado guiará a estruturação da `AuraEngine` em TypeScript.

---

## 🗄️ Arquitetura de Dados (Supabase)

A modelagem de dados segue a integridade referencial rigorosa para suportar progressão, balanceamento de contas e rankings.

*   `profiles`: Vinculado ao Auth. Guarda metadados do jogador, `Level` e `XP` geral (Aura Total).
*   `songs`: Tabela de catálogo das faixas (Título, Artista, BPM, Cover Art e caminho de URL para o áudio no Storage).
*   `beatmaps`: Documentos que contêm as "notas" (timestamps) e as expectativas anatômicas (coordenadas x,y), vinculados por uma foreign key a `songs`.
*   `leaderboards`: Tabela de registro imutável do fim das partidas, mapeando quem jogou, a pontuação bruta (`score`), a precisão (`accuracy %`) e o `max_combo` (pontos encadeados sem errar).

---

## 🧠 Lógica da Partida: O "Sync" de Dança e a Aura Engine

O desafio de engenharia do BBA é fazer uma **comparação vetorial em tempo real** entre a coreografia estática (arquivo JSON) e a interpretação biométrica dinâmica (MediaPipe Pose Engine).

### 1. O Arquivo de Coreografia (`beatmap.json`)
Para que o sistema seja extremamente leve, a abordagem foca em **Keyframes de Validação**, em vez de gravar frame a frame.

```json
{
  "timestamp": 12.5, // Ponto de impacto em segundos exatos na timeline da música
  "expected_pose": {
    "left_wrist": { "x": 0.2, "y": 0.8 }, // Coordenada normalizada esperada (0-1) na tela
    "right_wrist": { "x": 0.8, "y": 0.8 }
  },
  "tolerance": 0.15 // Raio de margem de tolerância adaptativa (Hitbox)
}
```

### 2. O Game Loop (Ciclo de Validação)
No frontend, uma classe abstraída em TypeScript assumirá a orquestração do loop do jogo:

1.  **Inference:** O MediaPipe captura os pixels e cospe um array de coordenadas dos 33 keypoints a cada frame da tela (60 fps).
2.  **Tracking:** Monitora em paralelo o ponteiro de áudio `currentTime` extraído da instância decodificada do Web Audio.
3.  **Matching:** Quando o tempo da música atinge o `timestamp` do bloco de notas agendado, a CPU calcula instantaneamente a **Distância Euclidiana** entre a mão física do jogador e o alvo lógico desenhado na tela.
4.  **Scoring & Feedback Dinâmico:**
    *   **Distância < 0.05 = PERFECT:** Aplica ganho de +Aura. O volume da música é potencializado e o *Low Pass Filter* atinge 20.000Hz (som perfeitamente cristalino).
    *   **Distância < 0.15 = GOOD:** Ponto parcial. O progresso mantém a estabilidade do fluxo de dança.
    *   **Distância > 0.15 = MISS:** Quebra de Combo e perda grave de Aura. O filtro sonoro cai instantaneamente para 400Hz, "abafando" a música para induzir o jogador a recuperar o ritmo.

---

## 🚀 Roadmap de Desenvolvimento

- **Fase 1 - UI Foundation (✅ Concluído):** Criação da arquitetura no Next.js App Router, estruturação de Landing Page Glassmorphism e consolidação dos Layouts modulares do Dashboard.
- **Fase 2 - Supabase Integration (⏳ Próximo):** Deploy da infraestrutura cloud. Modelagem das tabelas RLS (Row Level Security), configuração do Auth para os perfis e setup das buckets do Storage para hospedagem dos `.mp3`.
- **Fase 3 - Aura Engine (TS Class):** Migração e tipagem robusta do core de visão da pasta `prev-att`. Encapsulamento completo da inteligência artificial separada das re-renderizações cíclicas do React.
- **Fase 4 - Beatmap Parser & HUD:** Implementação do interpretador JSON. Desenvolvimento de um algoritmo para injetar visualmente as "bolhas de impacto" na HUD do Canvas, animando-as síncronas à batida do AudioContext.
- **Fase 5 - Containerização & Produção:** Empacotamento via Docker Standalone, otimização de cache WebAssembly/MediaPipe, para deploy em uma Virtual Machine em cloud (Linux EC2/GCP).
