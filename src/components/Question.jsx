import React from "react";
import results from "../../api/db";
import Option from "./Options";
import { useEffect, useState } from "react";
import Score from "./Scores";
import categories from "../../api/categories";

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

  // category
  const [category, setCategory] = useState(() => {
    const index = Math.floor(Math.random() * categories.length);
    return categories[index];
  });

  // function to get random object i.e.., question from db
  const getRandom = (results) => {
    const index = Math.floor(Math.random() * results.length);
    return results[index];
  };

  // get user requested category and selects random one from the filtered questions
  function getCategory(userCategory) {
    // checking if user selected any category
    if (category !== "Select Category") {
      const filteredQuestions = results.filter((item) => {
        return item.category === userCategory;
      });
      // set question with random question from filtered questions
      setQuestion(getRandom(filteredQuestions));
      console.log(filteredQuestions);
    } else {
      // set random question if no category is selected
      setQuestion(getRandom(results));
    }
  }

  // shuffles answers and sets the answer whenever the question state changes (dependency)
  useEffect(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    const shuffled = shuffleAnswers(allAnswers);
    setAnswer(shuffled);
  }, [question]);

  // renders everytime when a category is changed
  useEffect(() => {
    getCategory(category);
  }, [category]);

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
  function handleOptionClick(e) {
    const { id } = e.target;
    setSelectedAnswer(id);
  }

  function handleCategoryClick(e) {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  }

  // checking if user selected answer is equal to actual answer
  function handleSubmitAnswer(e) {
    e.preventDefault();
    if (selectedAnswer === question.correct_answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    if (category !== "Select Category") {
      getCategory(category);
    } else {
      setQuestion(getRandom(results)); // generating another ques after submit
    }
    setSelectedAnswer(null);
    // uncheck radio buttons after submit
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((button) => {
      button.checked = false;
    });
  }

  return (
    <div>
      <form>
        <select name="trivia_category" onChange={handleCategoryClick}>
          {categories.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </form>

      <h2>{question.question}</h2>
      <p>Category: {question.category}</p>
      <form action="post">
        {answer.map((ans, index) => (
          <Option
            isChecked={handleOptionClick}
            key={index}
            id={ans}
            ans={ans}
          />
        ))}
        <button onClick={handleSubmitAnswer}>Submit</button>
      </form>
      {isCorrect !== null && <p>{isCorrect ? "Correct" : "Incorrect"}</p>}
      <Score score={score} />
    </div>
  );
}
