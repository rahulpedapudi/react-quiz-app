import React from "react";
import results from "../../api/db";
import Option from "./Options";
import { useEffect, useState } from "react";
import Score from "./Scores";

export default function Question() {
  // State management for generating question.
  // initial question is a random question from the data.
  const [question, setQuestion] = useState(() => {
    const index = Math.floor(Math.random() * results.length);
    return results[index];
  });
  // Answers for the current question, (correct answer and incorrect answers are different key value pairs )
  const [answer, setAnswer] = useState([]);
  // set user selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // to check if answer is correct or incorrect
  const [isCorrect, setIsCorrect] = useState(null);
  // keeping track of score
  const [score, setScore] = useState(0);

  // function to get random object i.e.., question from db
  const getRandom = (results) => {
    const index = Math.floor(Math.random() * results.length);
    return results[index];
  };

  // shuffles answers and sets the answer whenever the question state changes (dependency)
  useEffect(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    const shuffled = shuffleAnswers(allAnswers);
    setAnswer(shuffled);
  }, [question]);

  // shuffle algorithm fisher-yates shuffle
  const shuffleAnswers = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // id is the answer string that user selected
  function handleClick(e) {
    const { id } = e.target;
    setSelectedAnswer(id);
  }

  // checking if user selected answer is equal to actual answer
  function handleSubmit(e) {
    e.preventDefault();
    if (selectedAnswer === question.correct_answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
    setQuestion(getRandom(results)); // generating another ques after submit
    setSelectedAnswer(null);
    // uncheck radio buttons after submit
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((button) => {
      button.checked = false;
    });
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
