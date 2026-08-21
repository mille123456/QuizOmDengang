import { demoQuizzes } from "@/lib/demo-data";

import { QuizCard } from "@/components/QuizCard";

export default function Home() {

  const daily =

    demoQuizzes.find((q) => q.featured_daily) ?? demoQuizzes[0];

  const weekly =

    demoQuizzes.find((q) => q.featured_weekly) ?? demoQuizzes[1];

  const latest = demoQuizzes[1];

  return (

    <main>

      <section className="container hero">

        <div>

          <span className="eyebrow">

            Historie · mennesker · begivenheder

          </span>

          <h1>

            Hvor godt kender du det, der <em>skete engang?</em>

          </h1>

          <p>

            Test din viden om mennesker, begivenheder og historier fra

            dengang. Svar på 10 spørgsmål og lær noget nyt undervejs.

          </p>

          <div className="actions">

            <a className="btn primary" href={`/quiz/${daily.id}`}>

              START QUIZ

            </a>

            <a className="btn secondary" href="/quizzer">

              SE ALLE QUIZZER

            </a>

          </div>

        </div>

        <div

          className="heroImage"

          aria-label="Historisk avis, kaffe og bibliotek"

        />

      </section>

      <section className="container section">

        <div className="sectionHeader">

          <h2>Udvalgte quizzer</h2>

          <a href="/quizzer">Se alle →</a>

        </div>

        <div className="grid">

          <QuizCard quiz={daily} />

          <QuizCard quiz={weekly} />

          <QuizCard quiz={latest} />

        </div>

      </section>

      <section className="container section">

        <div className="sectionHeader">

          <h2>Kategorier</h2>

        </div>

        <div className="grid">

          {[

            "Danmark",

            "Verden",

            "Historie",

            "Sport",

            "Kultur",

            "Videnskab",

            "Kongehuset",

            "Kriminalstof",

            "Økonomi",

          ].map((c) => (

            <a

              key={c}

              href={`/quizzer?kategori=${encodeURIComponent(c)}`}

              className="card"

            >

              <span className="badge">{c}</span>

              <h3>Quiz om {c.toLowerCase()}</h3>

              <p>Find quizzer i denne kategori.</p>

            </a>

          ))}

        </div>

      </section>

    </main>

  );

}
