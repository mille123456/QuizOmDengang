export type Quiz = {

  id: string;

  slug: string;

  title: string;

  description: string;

  category: string;

  subcategory?: string;

  period: string;

  difficulty: "Let" | "Middel" | "Svær";

  quiz_type?: string;

  active: boolean;

featured_daily: boolean;

featured_weekly: boolean;

is_daily?: boolean;

is_weekly?: boolean;

created_at: string;

  question_count?: number;

};

export type Question = {

  id: string;

  quiz_id: string;

  question: string;

  answer_a: string;

  answer_b: string;

  answer_c: string;

  answer_d: string;

  correct_answer: "A" | "B" | "C" | "D";

  explanation: string;

  source?: string;

  source_date?: string;

  newspaper?: string;

  newspaper_date?: string;

  page?: string;

  sort_order: number;

};

export type QuizResult = {

  id: string;

  user_id: string;

  quiz_id: string;

  score: number;

  percentage: number;

  time_seconds?: number;

  created_at: string;

};

export type User = {

  id: string;

  username: string;

  email: string;

  role: "user" | "admin";

  active: boolean;

  created_at: string;

};
