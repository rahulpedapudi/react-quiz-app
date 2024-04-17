import React from "react";
import axios from "axios";
import data from "../../api/data";
import Option from "./Options";
import { useEffect, useState } from "react";

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
  const [isCorrect, setCorrect] = useState(false);

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
    console.log(e.target.id);
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
      </form>
    </div>
  );
}
