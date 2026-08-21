CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (

  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  username TEXT UNIQUE NOT NULL,

  email TEXT UNIQUE NOT NULL,

  password_hash TEXT NOT NULL,

  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user','admin')),

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE TABLE IF NOT EXISTS quizzes (

  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  slug TEXT UNIQUE NOT NULL,

  title TEXT NOT NULL,

  description TEXT NOT NULL DEFAULT '',

  category TEXT NOT NULL,

  subcategory TEXT,

  period TEXT NOT NULL,

  difficulty TEXT NOT NULL CHECK (difficulty IN ('Let','Middel','Svær')),

  quiz_type TEXT NOT NULL DEFAULT 'Historisk begivenhed',

  is_active BOOLEAN NOT NULL DEFAULT true,

  is_daily BOOLEAN NOT NULL DEFAULT false,

  is_weekly BOOLEAN NOT NULL DEFAULT false,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE TABLE IF NOT EXISTS questions (

  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,

  question TEXT NOT NULL,

  answer_a TEXT NOT NULL,

  answer_b TEXT NOT NULL,

  answer_c TEXT NOT NULL,

  answer_d TEXT NOT NULL,

  correct_answer CHAR(1) NOT NULL CHECK (correct_answer IN ('A','B','C','D')),

  explanation TEXT NOT NULL DEFAULT '',

  source TEXT,

  source_date DATE,

  newspaper TEXT,

  newspaper_date DATE,

  page TEXT,

  sort_order INTEGER NOT NULL DEFAULT 1

);

CREATE TABLE IF NOT EXISTS quiz_results (

  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,

  score INTEGER NOT NULL,

  total INTEGER NOT NULL,

  percent NUMERIC(5,2) NOT NULL,

  duration_seconds INTEGER,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()

);

CREATE INDEX IF NOT EXISTS quizzes_slug_idx ON quizzes(slug);

CREATE INDEX IF NOT EXISTS quizzes_category_idx ON quizzes(category);

CREATE INDEX IF NOT EXISTS quizzes_period_idx ON quizzes(period);

CREATE INDEX IF NOT EXISTS quizzes_difficulty_idx ON quizzes(difficulty);

CREATE INDEX IF NOT EXISTS questions_quiz_id_idx ON questions(quiz_id);

CREATE INDEX IF NOT EXISTS results_user_id_idx ON quiz_results(user_id);

CREATE INDEX IF NOT EXISTS results_quiz_id_idx ON quiz_results(quiz_id);

CREATE OR REPLACE FUNCTION set_quiz_updated_at()

RETURNS TRIGGER AS $$

BEGIN

  NEW.updated_at = now();

  RETURN NEW;

END;

$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS quizzes_set_updated_at ON quizzes;

CREATE TRIGGER quizzes_set_updated_at

BEFORE UPDATE ON quizzes

FOR EACH ROW

EXECUTE FUNCTION set_quiz_updated_at();
