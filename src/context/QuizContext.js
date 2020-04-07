import React, { useState, createContext, useContext } from "react";

import { PlayerContext } from "context/PlayerContext";
import { CustomQuizContext } from "context/CustomQuizContext";
import { RandomQuizContext } from "context/RandomQuizContext";
import { CategoryContext } from "context/CategoryContext";
import { TypeContext } from "context/TypeContext";
import { QuestionsContext } from "context/QuestionsContext";
import Player from "context/Player";

import { shuffle } from "Util";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const selectedCategoryId = useContext(CategoryContext).categoryInput[0];
  const type = useContext(TypeContext).selectedTypeInput[0];

  //RandomQuiz
  const RANDOM_PATH = "/random-quiz";
  const { QUESTIONS_BASE_URL, getQuestions } = useContext(QuestionsContext);

  const {
    questionsPerPlayerState,
    MIN_QUESTIONS,
    nameInputsState,
  } = useContext(RandomQuizContext);

  const [questionsPerPlayer, setQuestionsPerPlayer] = questionsPerPlayerState;
  const [names, setNames] = nameInputsState;

  //Custom quiz
  const CUSTOM_PATH = "/custom-quiz/start";
  const { selectedCustomQuiz, CUSTOM_QUIZ_BASE_URL } = useContext(
    CustomQuizContext
  );
  const selectedCustomQuizId = selectedCustomQuiz[0];

  // Players
  const setPlayers = useContext(PlayerContext)[1];

  //Questions
  const [currentQuizUrl, setCurrentQuizUrl] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const initBeforeSubmit = () => {
    setQuestionsPerPlayer(0);
    setNames([]);
    setPlayers([]);
    setQuestions([]);
    setCurrentQuestionIndex(0);
  };

  const validateInputs = (location) => {
    switch (location) {
      case RANDOM_PATH:
        if (
          names.includes(undefined) ||
          names.includes("") ||
          names.length === 0
        ) {
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

  const setUpPlayers = (history) => {
    switch (history) {
      case CUSTOM_PATH:
        setPlayers([new Player("User")]);
        break;
      case RANDOM_PATH:
        names.map((name) =>
          setPlayers((players) => [...players, new Player(name)])
        );
        break;
      default:
        break;
    }
  };

  function tryToStartQuiz(url, history) {
    getQuestions(url).then((questions) => {
      if (questions.length === 0) {
        alert(
          "There are not enough questions matching the entered parameters :("
        );
        setPlayers([]);
      } else {
        const location = history.location.pathname;
        setQuestions(questions);
        setUpPlayers(location);
        setCurrentQuestionNumber(1);
        setCurrentQuizUrl(location);
        history.push("/quiz");
      }
    });
  }

  const createUrl = (location) => {
    switch (location) {
      case RANDOM_PATH:
        let questionNumberUrlPart = `amount=${
          questionsPerPlayer * names.length
        }`;
        let categoryUrlPart =
          selectedCategoryId === "0" ? "" : `&category=${selectedCategoryId}`;
        let typeUrlPart = type === "" ? "" : `&type=${type}`;
        let validatedPart = "&validated=true";
        let finalUrl =
          QUESTIONS_BASE_URL +
          "?" +
          questionNumberUrlPart +
          categoryUrlPart +
          typeUrlPart +
          validatedPart;
        return finalUrl;
      case CUSTOM_PATH:
        return CUSTOM_QUIZ_BASE_URL + `/${selectedCustomQuizId}`;
      default:
        break;
    }
  };

  const submitStarterForm = (history) => {
    const location = history.location.pathname;
    const url = createUrl(location);
    console.log(url)
    if (validateInputs(location)) {
      tryToStartQuiz(url, history);
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
    <QuizContext.Provider
      value={{
        getAnswersZip,
        submitStarterForm,
        initBeforeSubmit,
        questionNumberState: [currentQuestionNumber, setCurrentQuestionNumber],
        currentQuizUrlState: [currentQuizUrl, setCurrentQuizUrl],
        currentQuestionIndexState: [
          currentQuestionIndex,
          setCurrentQuestionIndex,
        ],
        allQuestionsState: [questions, setQuestions],
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
