import { demoQuizzes } from "@/lib/demo-data";

import { QuizCard } from "@/components/QuizCard";

export default function QuizPage({

  params,

}: {

  params: { id: string };

}) {

  const quiz = demoQuizzes.find((q) => q.id === params.id);

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

      <div className="sectionHeader">

        <span className="eyebrow">{quiz.category}</span>

        <h1>{quiz.title}</h1>

        <p>{quiz.description}</p>

      </div>

      <QuizCard quiz={quiz} />

    </main>

  );

}
