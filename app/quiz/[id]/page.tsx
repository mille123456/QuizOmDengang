import { demoQuizzes } from "@/lib/demo-data";

import { QuizCard } from "@/components/QuizCard";

export default async function QuizPage({

  params,

}: {

  params: Promise<{ id: string }>;

}) {

  const { id } = await params;

  const quiz = demoQuizzes.find((q) => q.id === id);

  if (!quiz) {

    return (

      <main className="container section">

        <h1>Quiz ikke fundet</h1>

        <p>Den quiz, du leder efter, findes ikke.</p>

      </main>

    );

  }

  return (

    <main className="container section">

      <QuizCard quiz={quiz} />

    </main>

  );

}
