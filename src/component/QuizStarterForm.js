import React, { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";
import axios from "axios";

export default function QuizStarterForm() {
  const CATEGORY_URL = "https://opentdb.com/api_category.php";
  const DIFFICULTIES = ["Any Difficulty", "Easy", "Medium", "Hard"];
  const DEFAULT_CATEGORY = {
    id: 8,
    name: "Any Category"
  };
  const MIN_QUESTIONS = 5;

  const [players, setPlayers] = useContext(PlayerContext);
  const [categories, setCategories] = useState([]);
  const [names, setNames] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    DEFAULT_CATEGORY.id
  );
  const [numberOfquestions, setNumberOfquestions] = useState(MIN_QUESTIONS);
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0]);

  useEffect(() => {
    axios.get(CATEGORY_URL).then(res => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  const handlePlayerName = e => {
    let currentNames = [...names];
    currentNames[e.target.name] = e.target.value;
    setNames(currentNames);
    console.log(names);
  };

  const handleCategory = e => {
    setSelectedCategoryId(e.target.value);
  };

  const handleNumberOfQuestions = e => {
    setNumberOfquestions(e.target.value);
  };

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
  };

  return (
    <div>
      <h1>Loading Quiz...</h1>
      <form>
        {players.map((player, index) => (
          <div key={index}>
            <label htmlFor={player.name}>Player {index + 1} name: </label>
            <input
              name={index}
              id={player.name}
              type="text"
              placeholder={player.name}
              required
              onKeyUp={handlePlayerName}
            ></input>
          </div>
        ))}
        <label htmlFor="category">Category: </label>
        <select id="category" name="category" onChange={handleCategory}>
          {[DEFAULT_CATEGORY, ...categories].map(category => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="numberOfQuestions">Questions / Player: </label>
        <input
          type="number"
          id="numberOfQuestions"
          required
          name="numberOfQuestions"
          min={MIN_QUESTIONS}
          max="25"
          onChange={handleNumberOfQuestions}
        ></input>
        <label htmlFor="difficulty">Difficulty: </label>
        <select id="difficulty" name="difficulty" onChange={handleDifficulty}>
          {DIFFICULTIES.map((difficulty, index) => (
            <option value={difficulty} key={index}>
              {difficulty}
            </option>
          ))}
        </select>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
