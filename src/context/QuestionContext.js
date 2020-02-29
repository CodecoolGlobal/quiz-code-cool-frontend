import React, { useState, createContext, useContext } from "react";
import axios from "axios";

import { PlayerContext } from "./PlayerContext";
import { CustomQuizContext } from "./CustomQuizContext";
import { RandomQuizContext } from "./RandomQuizContext";

import Question from "./Question";
import Player from "./Player";

export const QuestionContext = createContext();

export const QuestionProvider = props => {
  //RandomQuiz
  const {
    questionsPerPlayerState,
    BASE_URL_FOR_RANDOM_QUIZ,
    MIN_QUESTIONS,
    categoryInput,
    typeInput,
    nameInputsState
  } = useContext(RandomQuizContext);

  const questionsPerPlayer = questionsPerPlayerState[0];
  const selectedCategoryId = categoryInput[0];
  const type = typeInput[0];
  const [names, setNames] = nameInputsState;

  //Custom quiz
  const { selectedCustomQuiz, BASE_URL_FOR_CUSTOM_QUIZ } = useContext(
    CustomQuizContext
  );
  const selectedCustomQuizId = selectedCustomQuiz[0];

  // Players
  const setPlayers = useContext(PlayerContext)[1];

  //Questions
  const [quizMode, setQuizMode] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const initBeforeSubmit = () => {
    setNames([]);
    setPlayers([]);
    setQuestions([]);
    setCurrentQuestionIndex(0);
  };

  const validateInputs = quizMode => {
    switch (quizMode) {
      case "Random":
        if (names.includes(undefined) || names.includes("")) {
          alert("Please fill out all the fields!");
          return false;
        }
        if (questionsPerPlayer < MIN_QUESTIONS) {
          alert("Questions / Player must be a positive number.");
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const setUpPlayers = quizMode => {
    switch (quizMode) {
      case "Custom":
        setPlayers([new Player("User")]);
        break;
      case "Random":
        names.map(name =>
          setPlayers(players => [...players, new Player(name)])
        );
        break;
      default:
        break;
    }
  };

  function fetchQuestions(url, formProps) {
    axios.get(url).then(resp => {
      if (resp.data === "") {
        alert(
          "There are not enough questions matching the entered parameters :("
        );
        return false;
      }
      resp.data.map(questionData =>
        setQuestions(questions => [
          ...questions,
          new Question(
            questionData.category.name,
            questionData.type,
            questionData.question,
            questionData.correctAnswer,
            questionData.incorrectAnswers
          )
        ])
      );
      formProps.history.push("/quiz");
    });
    return true;
  }

  const createUrl = quizMode => {
    switch (quizMode) {
      case "Random":
        let questionNumberUrlPart = `amount=${questionsPerPlayer *
          names.length}`;
        let categoryUrlPart =
          selectedCategoryId === "0" ? "" : `&category=${selectedCategoryId}`;
        let typeUrlPart = type === "" ? "" : `&type=${type}`;
        let finalUrl =
          BASE_URL_FOR_RANDOM_QUIZ +
          questionNumberUrlPart +
          categoryUrlPart +
          typeUrlPart;
        return finalUrl;
      case "Custom":
        return BASE_URL_FOR_CUSTOM_QUIZ + `/${selectedCustomQuizId}`;
      default:
        break;
    }
  };

  const submitStarterForm = (formProps, quizMode) => {
    initBeforeSubmit();
    const url = createUrl(quizMode);
    if (validateInputs(quizMode)) {
      if (fetchQuestions(url, formProps) === true) {
        setUpPlayers(quizMode);
        setCurrentQuestionNumber(1);
        setQuizMode(quizMode);
      }
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        submitStarterForm: submitStarterForm,
        questionNumberState: [currentQuestionNumber, setCurrentQuestionNumber],
        quizModeState: [quizMode, setQuizMode],
        currentQuestionIndexState: [
          currentQuestionIndex,
          setCurrentQuestionIndex
        ],
        allQuestionsState: [questions, setQuestions]
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};
