"use client";

import { useState } from "react";

interface QuizQuestion {
  id: number;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizSectionProps {
  title: string;
  instructions: string;
  questions: QuizQuestion[];
}

export function QuizSection({ title, instructions, questions }: QuizSectionProps) {
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());

  const toggleAnswer = (id: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const revealAll = () => {
    setRevealedAnswers(new Set(questions.map((q) => q.id)));
  };

  const hideAll = () => {
    setRevealedAnswers(new Set());
  };

  return (
    <section className="bg-bg-primary p-component rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-h3 font-heading font-semibold">{title}</h2>
          <p className="mt-2 text-text-muted">{instructions}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={revealAll}
            className="px-3 py-1.5 text-small bg-bg-secondary border border-border-light rounded-lg hover:border-accent-blue transition-colors"
          >
            Reveal All
          </button>
          <button
            onClick={hideAll}
            className="px-3 py-1.5 text-small bg-bg-secondary border border-border-light rounded-lg hover:border-accent-blue transition-colors"
          >
            Hide All
          </button>
        </div>
      </div>

      <div className="mt-component space-y-component">
        {questions.map((q, i) => (
          <div key={q.id} className="p-element bg-bg-secondary rounded-lg">
            <div className="flex gap-3">
              <span className="text-accent-blue font-medium">{i + 1}.</span>
              <div className="flex-1">
                <p className="font-medium">{q.question}</p>

                {q.type === "multiple_choice" && q.options && (
                  <div className="mt-element space-y-2">
                    {q.options.map((opt, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-border-light text-small">
                          {String.fromCharCode(65 + j)}
                        </span>
                        <span className="text-small">{opt}</span>
                      </div>
                    ))}
                  </div>
                )}

                {q.type === "true_false" && (
                  <div className="mt-element flex gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full border border-border-light text-small">
                        T
                      </span>
                      <span className="text-small">True</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full border border-border-light text-small">
                        F
                      </span>
                      <span className="text-small">False</span>
                    </div>
                  </div>
                )}

                {q.type === "short_answer" && (
                  <div className="mt-element">
                    <div className="h-16 border border-border-light rounded bg-bg-primary" />
                  </div>
                )}

                <div className="mt-element">
                  <button
                    onClick={() => toggleAnswer(q.id)}
                    className="text-small text-accent-blue cursor-pointer hover:underline"
                  >
                    {revealedAnswers.has(q.id) ? "Hide answer" : "Show answer"}
                  </button>
                  {revealedAnswers.has(q.id) && (
                    <div className="mt-2 p-element bg-bg-primary rounded">
                      <p className="text-small">
                        <span className="font-medium">Answer:</span> {q.correctAnswer}
                      </p>
                      <p className="text-small text-text-muted mt-1">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
