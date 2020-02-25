import React, { useState, useContext, useEffect } from "react";
import { RandomStarterFormContext } from "../../context/RandomStarterFormContext";
import axios from "axios";

import { Select, InputItem, InputLabel } from "../../style/MyStyle";

export default function CustomQuizInput() {
  const [customQuizzes, setCustomQuizzes] = useState([]);
  const setSelectedCustomQuizId = useContext(RandomStarterFormContext)
    .customQuizInput[1];
  const BASE_URL_FOR_CUSTOM_QUIZ = useContext(RandomStarterFormContext)
    .BASE_URL_FOR_CUSTOM_QUIZ;

  useEffect(() => {
    axios.get(BASE_URL_FOR_CUSTOM_QUIZ).then(res => {
      setCustomQuizzes(res.data);
    });
  }, [BASE_URL_FOR_CUSTOM_QUIZ]);

  const handleCustomQuiz = e => {
    setSelectedCustomQuizId(e.target.value);
  };

  return (
    <div>
      <InputItem>
        <InputLabel htmlFor='custom-quiz'>Custom Quiz</InputLabel>
        <Select id='custom-quiz' name='custom-quiz' onChange={handleCustomQuiz}>
          {customQuizzes.map(quiz => (
            <option value={quiz.id} key={quiz.id}>
              {quiz.name}
            </option>
          ))}
        </Select>
      </InputItem>
    </div>
  );
}
