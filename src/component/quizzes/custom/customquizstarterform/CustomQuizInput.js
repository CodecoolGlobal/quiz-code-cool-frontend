import React, { useContext, useEffect, useState } from "react";
import { CustomQuizContext } from "context/CustomQuizContext";
import { ProgressContext } from "context/ProgressContext";
import { Select, InputItem, InputLabel } from "style/js/CommonStyles";
import { api_getCustomQuizzes } from "api/customQuizConnection";

export default function CustomQuizInput() {

  const [customQuizzes, setCustomQuizzes] = useState([]);
  const { selectedCustomQuiz } = useContext(CustomQuizContext);
  const setSelectedCustomQuizId = selectedCustomQuiz[1];
  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const getCustomQuizzes = async () => {
    try {
      const quizzes = await api_getCustomQuizzes();
      setCustomQuizzes(quizzes);
    } catch(error) {
    }
  };

  useEffect(() => {
    getCustomQuizzes();
  }, []);

  const handleCustomQuiz = e => {
    setIsReadyToProceed(true);
    setSelectedCustomQuizId(e.target.value);
  };

  return (
    <div>
      <InputItem>
        <InputLabel htmlFor='custom-quiz'>Custom Quiz</InputLabel>
        <Select id='custom-quiz' name='custom-quiz' onChange={handleCustomQuiz}>
          <option disabled defaultValue='' selected>
            -- Select quiz --
          </option>
          {customQuizzes.map(quiz => (
            <option value={quiz.id} key={quiz.id}>
              {quiz.name} - {quiz.appUser.name}
            </option>
          ))}
        </Select>
      </InputItem>
    </div>
  );
}
