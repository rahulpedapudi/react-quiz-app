import React from "react";
import { useEffect, useState } from "react";
import results from "../../api/db";
import Option from "./Options";
import Score from "./Scores";
import Timer from "./Timer";
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

  const [difficulty, setDifficulty] = useState(null);

  // function to get random object i.e.., question from db
  const getRandom = (results) => {
    const index = Math.floor(Math.random() * results.length);
    return results[index];
  };

  // get user requested category and selects random one from the filtered questions
  function getByFilter(userCategory, userDifficulty) {
    if (userCategory) {
      setCategory(userCategory);
    }
    if (userDifficulty) {
      setDifficulty(userDifficulty);
    }
    if (userCategory && userDifficulty) {
      setCategory(userCategory);
      setDifficulty(userDifficulty);
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
    getByFilter(category, difficulty);
  }, [category, difficulty]);

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

  function handleDifficultyClick(e) {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
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
    // getByFilter(category, difficulty);
    handleFilterClick();
    setSelectedAnswer(null);
    // uncheck radio buttons after submit
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((button) => {
      button.checked = false;
    });
  }

  function handleFilterClick() {
    if (category === "Select Category" && difficulty === "Select Difficulty") {
      setQuestion(getRandom(results));
    } else if (category && difficulty) {
      const filteredQuestions = results.filter((item) => {
        return item.category === category && item.difficulty === difficulty;
      });
      setQuestion(getRandom(filteredQuestions));
    } else {
      setQuestion(getRandom(results));
    }
  }

  const handleTimerExpire = () => {
    console.log(category);
    console.log(difficulty);
    getByFilter(category, difficulty);
  };

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

        <select
          onChange={handleDifficultyClick}
          name="trivia_difficulty"
          id="difficulty">
          <option value="Any Difficulty" defaultValue={true}>
            Select Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button onClick={handleFilterClick} type="button">
          Filter
        </button>
      </form>

      <h2>{question.question}</h2>
      <p>Category: {question.category}</p>
      <p>Difficulty: {question.difficulty}</p>
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
      <Timer
        initialSeconds={
          question.difficulty === "easy"
            ? 30
            : question.difficulty === "medium"
            ? 20
            : 15
        }
        question={question}
        onExpire={handleTimerExpire}
      />
    </div>
  );
}
