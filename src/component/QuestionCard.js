import React, { useState, useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { PlayerContext } from "../context/PlayerContext";

export default function QuestionCard() {
  const [questions, setQuestions] = useContext(QuestionContext);
  const [players, setPlayers] = useContext(PlayerContext);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [checkedAnswer, setCheckedAnswer] = useState(0);

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const formatText = text => {
    text = text.replace(/&quot;/g, "'");
    text = text.replace(/&ldquo;/g, "“");
    text = text.replace(/&rdquo;/g, "”");
    text = text.replace(/&#039;/g, "'");
    text = text.replace(/&eacute;/g, "é");

    return text;
  };

  const showAnswers = question => {
    let incorrect_answers = question.incorrect_answers;
    let correct_answer = question.correct_answer;

    let answers = [correct_answer, ...incorrect_answers];
    let mapAnswers = [1];
    for (let i = 0; i < incorrect_answers.length; i++) {
      mapAnswers[i + 1] = 0;
    }

    answers.map(answer => (answer = formatText(answer)));

    let answersZip = answers.map((answers, index) => {
      return [answers, mapAnswers[index]];
    });
    shuffle(answersZip);

    return answersZip.map(answer => (
      <div>
        <input
          type="radio"
          value={answer[1]}
          name="answer"
          onClick={chooseAnswer}
        />
        {answer[0]}
      </div>
    ));
  };

  const chooseAnswer = () => {
    let nextButton = document.querySelector("#next");
    nextButton.disabled = false;
    let guess = document.querySelector('input[name="answer"]:checked').value;
    setCheckedAnswer(guess);
  };

  const handleNextButton = () => {
    console.log("HE");
  };

  return (
    <div>
      <div>
        <h1>Player: {players[currentPlayerIndex].name}</h1>
        <h3>{formatText(questions[0].question)}</h3>
        <div>{showAnswers(questions[0])}</div>
        <div>
          <button type="button" id="next" onClick={handleNextButton} disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
