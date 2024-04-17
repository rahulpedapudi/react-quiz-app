import React from "react";
import axios from "axios";
import data from "../../api/data";
import Option from "./Options";
import { useEffect, useState } from "react";
import Score from "./Scores";

export default function Question() {
  const [question, setQuestion] = useState({
    question: "What was the last Marx Brothers film to feature Zeppo?",
    correct_answer: "Duck Soup",
    incorrect_answers: [
      "A Night at the Opera",
      "A Day at the Races",
      "Monkey Business",
    ],
  });

  const [answer, setAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];

    const shuffled = shuffleAnswers(allAnswers);
    setAnswer(shuffled);
  }, []);

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
    if (selectedAnswer === question.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    e.preventDefault();
  }
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // const response = await axios.get(
  //         //   "https://v2.jokeapi.dev/joke/Any?type=single"
  //         // );
  //         const response = await data.get("/random");
  //         console.log(response);
  //         setQuestion(response.data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };

  //     fetchData();
  //   }, []);

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
