-- ==========================================
-- BEAT BOUND AURA - SUPABASE DATABASE SCHEMA
-- ==========================================

-- Extensão necessária para geração de UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. PROFILES (Perfis dos Jogadores)
-- ==========================================
-- Esta tabela estende a tabela nativa de autenticação do Supabase (auth.users).
-- Guarda os dados de progressão necessários para o Dashboard.
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  level INTEGER DEFAULT 1,
  aura_xp INTEGER DEFAULT 0, -- XP Total acumulado
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Políticas de Segurança (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Perfis são públicos para todos verem." ON profiles FOR SELECT USING (true);
CREATE POLICY "Usuários podem criar seu próprio perfil." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Usuários podem atualizar apenas o próprio perfil." ON profiles FOR UPDATE USING (auth.uid() = id);


-- ==========================================
-- 2. SONGS (Catálogo de Músicas)
-- ==========================================
-- Alimenta a galeria de seleção de músicas na rota /dashboard/play
CREATE TABLE songs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  bpm INTEGER NOT NULL,
  difficulty TEXT NOT NULL, -- Ex: 'NORMAL', 'HARD', 'CRAZY'
  cover_image_path TEXT, -- Caminho/URL da imagem no Supabase Storage
  audio_file_path TEXT NOT NULL, -- Caminho/URL do .mp3 no Supabase Storage
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

ALTER TABLE songs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Músicas são públicas para leitura." ON songs FOR SELECT USING (true);
-- (A inserção e deleção de músicas geralmente é restrita a administradores)


-- ==========================================
-- 3. BEATMAPS (Coreografias)
-- ==========================================
-- Em vez de salvar milhares de linhas por música (uma para cada frame), 
-- usamos o poder do JSONB do PostgreSQL para salvar o array completo de Keyframes
-- em uma única célula. Isso deixa a query absurdamente mais rápida.
CREATE TABLE beatmaps (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE UNIQUE NOT NULL,
  map_data JSONB NOT NULL, -- O array contendo [{ timestamp, expected_pose, tolerance }]
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

ALTER TABLE beatmaps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Beatmaps são públicos para leitura." ON beatmaps FOR SELECT USING (true);


-- ==========================================
-- 4. SESSIONS (Histórico de Partidas / Leaderboards)
-- ==========================================
-- Alimenta os cards do Dashboard (Total de Sessões, Score Máximo, Precisão Média)
-- e os Rankings globais.
CREATE TABLE sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  player_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  accuracy NUMERIC(5, 2) NOT NULL DEFAULT 0.00, -- Ex: 98.50 (%)
  max_combo INTEGER NOT NULL DEFAULT 0,
  duration_seconds INTEGER NOT NULL, -- Para calcular o "Tempo de Jogo" no Dashboard
  played_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Sessões são públicas para gerar os rankings globais." ON sessions FOR SELECT USING (true);
CREATE POLICY "Jogadores só podem inserir sessões no próprio ID." ON sessions FOR INSERT WITH CHECK (auth.uid() = player_id);


-- ==========================================
-- VIEWS (Opcional - Para facilitar o Dashboard)
-- ==========================================
-- Uma view para buscar rapidamente as estatísticas vitais do jogador sem precisar 
-- fazer contas complexas no Frontend.
CREATE OR REPLACE VIEW player_stats AS
SELECT 
  player_id,
  COUNT(id) as total_sessions,
  MAX(score) as highest_score,
  ROUND(AVG(accuracy), 2) as average_accuracy,
  SUM(duration_seconds) as total_play_time_seconds
FROM sessions
GROUP BY player_id;
