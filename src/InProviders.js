import React from "react";

import AuthForm from "component/authentication/AuthForm";

import PrivateRoute from "component/RouteModifiers/PrivateRoute";
import DisableRouteWhenAuthenticated from "component/RouteModifiers/DisableRouteWhenAuthenticated";
import UserDetails from "component/user/UserDetails";
import Home from "component/user/Home";
import RandomQuizStarterForm from "component/quizzes/random/randomquizstarterform/RandomQuizStarterForm";
import CustomQuizStarterForm from "component/quizzes/custom/customquizstarterform/CustomQuizStarterForm";
import AddNewQuestionForm from "component/newquestion/NewQuestionForm";
import QuestionsList from "component/questions/AllQuestionsList";
import QuestionDetails from "component/questions/QuestionDetails";
import QuestionCard from "component/quizzes/questioncard/QuestionCard";
import Result from "component/quizzes/result/Result";
import Header from "component/layout/Header";

import CustomQuizSelect from "component/quizzes/custom/CustomQuizSelect";
import NewCustomQuiz from "component/quizzes/custom/newcustomquiz/NewCustomQuiz";

import { MenuProvider } from "context/MenuContext";
import { AnswerCorrectnessProvider } from "context/AnswerCorrectnessContext";
import { NewQuestionFormProvider } from "context/NewQuestionFormContext";

export default function InProviders() {
  return (
    <React.Fragment>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <DisableRouteWhenAuthenticated
        exact
        path='/sign-in'
        component={AuthForm}
      />
      <DisableRouteWhenAuthenticated
        exact
        path='/sign-up'
        component={AuthForm}
      />
      <PrivateRoute exact path='/user' component={UserDetails} />
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute
        exact
        path='/random-quiz'
        component={RandomQuizStarterForm}
      />
      <PrivateRoute exact path='/custom-quiz/new' component={NewCustomQuiz} />
      <PrivateRoute
        exact
        path='/custom-quiz/start'
        component={CustomQuizStarterForm}
      />
      <PrivateRoute exact path='/custom-quiz' component={CustomQuizSelect} />
      <AnswerCorrectnessProvider>
        <PrivateRoute exact path='/quiz' component={QuestionCard} />
      </AnswerCorrectnessProvider>
      <PrivateRoute exact path='/results' component={Result} />
      <NewQuestionFormProvider>
        <PrivateRoute
          exact
          path='/add-question'
          component={AddNewQuestionForm}
        />
      </NewQuestionFormProvider>
      <PrivateRoute exact path='/questions' component={QuestionsList} />
      <PrivateRoute exact path='/questions/:id' component={QuestionDetails} />
    </React.Fragment>
  );
}
