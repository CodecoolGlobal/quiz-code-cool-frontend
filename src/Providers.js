import React from "react";


import { AuthProvider } from "context/AuthContext";
import { UserProvider } from "context/UserContext";
import { QuizProvider } from "context/QuizContext";
import { PlayerProvider } from "context/PlayerContext";
import { RandomQuizProvider } from "context/RandomQuizContext";
import { CustomQuizProvider } from "context/CustomQuizContext";
import { ProgressProvider } from "context/ProgressContext";

import { CategoryProvider } from "context/CategoryContext";
import { TypeProvider } from "context/TypeContext";
import { StatusProvider } from "context/StatusContext";
import { RestoreFiltersProvider } from "context/RestoreFiltersContext";
import { QuestionsProvider } from "context/QuestionsContext";
import { QuestionFilterProvider } from "context/QuestionFilterContext";
import { NewQuizProvider } from "context/NewQuizContext";
import { QuestionDetailsProvider } from "context/QuestionDetailsContext";
import InProviders from "InProviders";

export default function Providers() {
  

  let components = [
    QuestionsProvider,
    CategoryProvider,
    StatusProvider,
    TypeProvider,
    RestoreFiltersProvider,
    QuestionFilterProvider,
    CustomQuizProvider,
    RandomQuizProvider,
    PlayerProvider,
    QuizProvider,
    ProgressProvider,
    NewQuizProvider,
    AuthProvider,
    QuestionDetailsProvider,
    InProviders,
  ];
    return components.reduce((prev, curr) => prev(curr), UserProvider);
}
