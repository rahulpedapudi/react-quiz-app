import React from "react";
import results from "../../api/db";
import Option from "./Options";
import { useEffect, useState } from "react";
import Score from "./Scores";

export default function Question() {
  const [question, setQuestion] = useState(() => {
    const index = Math.floor(Math.random() * results.length);
    return results[index];
  });
  const [answer, setAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const getRandom = (results) => {
    const index = Math.floor(Math.random() * results.length);
    return results[index];
  };

  useEffect(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];

    const shuffled = shuffleAnswers(allAnswers);
    setAnswer(shuffled);
  }, [question]);

  const shuffleAnswers = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  function handleClick(e) {
    const { id } = e.target;
    setSelectedAnswer(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedAnswer === question.correct_answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
    setQuestion(getRandom(results));
    setSelectedAnswer(null);
  }

  return (
    <div>
      <h2>{question.question}</h2>
      <form action="post">
        {answer.map((ans, index) => (
          <Option isChecked={handleClick} key={index} id={ans} ans={ans} />
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {isCorrect !== null && <p>{isCorrect ? "Correct" : "Incorrect"}</p>}
      <Score score={score} />
    </div>
  );
}
