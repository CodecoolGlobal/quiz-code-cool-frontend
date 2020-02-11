import React, { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";
import axios from "axios";

export default function QuizStarterForm() {
  const CATEGORY_URL = "https://opentdb.com/api_category.php";

  const [names, setNames] = useState([]);
  const [players, setPlayers] = useContext(PlayerContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    axios.get(CATEGORY_URL).then(res => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  /*   const saveInputs = e => {
    e.preventDefault();
    for (let i = 0; i < players.length; i++) {
      let playerName = this.elements[i];
      setNames([...names], playerName);
    }
  }; */

  const handlePlayerName = e => {
    let currentNames = [...names];
    currentNames[e.target.name] = e.target.value;
    setNames(currentNames);
    console.log("current names: " + currentNames);
    console.log("names: " + names);
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
              onKeyup={handlePlayerName}
            ></input>
          </div>
        ))}
        <label htmlFor="category">Category: </label>
        <select id="category" name="category">
          {categories.map(category => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
