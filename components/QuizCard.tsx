import type { Quiz } from "../lib/types";

export function QuizCard({ quiz }: { quiz: Quiz }) {

  return (

    <a href={`/quiz/${quiz.id}`} className="card">

      <span className="badge">{quiz.category}</span>

      <h3>{quiz.title}</h3>

      <p>{quiz.description}</p>

      <small>

        {quiz.period} · {quiz.difficulty}

      </small>

    </a>

  );

}
