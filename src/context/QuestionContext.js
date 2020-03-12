import React, { useState, createContext, useContext } from "react";
import axios from "axios";

import { PlayerContext } from "context/PlayerContext";
import { CustomQuizContext } from "context/CustomQuizContext";
import { RandomQuizContext } from "context/RandomQuizContext";
import { CategoryContext } from "context/CategoryContext";
import { TypeContext } from "context/TypeContext";

import Question from "context/Question";
import Player from "context/Player";

import { shuffle } from "Util";

export const QuestionContext = createContext();

export const QuestionProvider = props => {
  const selectedCategoryId = useContext(CategoryContext).categoryInput[0];
  const type = useContext(TypeContext).selectedTypeInput[0];

  //RandomQuiz
  const {
    questionsPerPlayerState,
    RANDOM_QUIZ_BASE_URL,
    MIN_QUESTIONS,
    nameInputsState
  } = useContext(RandomQuizContext);

  const [questionsPerPlayer, setQuestionsPerPlayer] = questionsPerPlayerState;
  const [names, setNames] = nameInputsState;

  //Custom quiz
  const { selectedCustomQuiz, CUSTOM_QUIZ_BASE_URL } = useContext(
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
    setQuestionsPerPlayer(0)
    setNames([]);
    setPlayers([]);
    setQuestions([]);
    setCurrentQuestionIndex(0);
  };

  const validateInputs = quizMode => {
    switch (quizMode) {
      case "Random":
        if (names.includes(undefined) || names.includes("") || names === []) {
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
        setPlayers([]);
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
        let validatedPart = "&validated=true";
        let finalUrl =
          RANDOM_QUIZ_BASE_URL +
          questionNumberUrlPart +
          categoryUrlPart +
          typeUrlPart +
          validatedPart;
        console.log(finalUrl);
        return finalUrl;
      case "Custom":
        return CUSTOM_QUIZ_BASE_URL + `/${selectedCustomQuizId}`;
      default:
        break;
    }
  };

  const submitStarterForm = (formProps, quizMode) => {
    const url = createUrl(quizMode);
    if (validateInputs(quizMode)) {
      if (fetchQuestions(url, formProps) === true) {
        setUpPlayers(quizMode);
        setCurrentQuestionNumber(1);
        setQuizMode(quizMode);
      } 
    }
  };

  //Answers
  const zipAnswers = (incorrectAnswersLength, answers) => {
    let mapAnswers = [1];
    for (let i = 0; i < incorrectAnswersLength; i++) {
      mapAnswers[i + 1] = 0;
    }
    const zip = answers.map((answers, index) => [answers, mapAnswers[index]]);
    return zip;
  };

  const getAnswersZip = () => {
    const { incorrectAnswers, correctAnswer } = questions[currentQuestionIndex];
    let answers = [correctAnswer, ...incorrectAnswers];
    const zip = zipAnswers(incorrectAnswers.length, answers);
    shuffle(zip);
    return zip;
  };

  return (
    <QuestionContext.Provider
      value={{
        getAnswersZip,
        submitStarterForm,
        initBeforeSubmit,
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
