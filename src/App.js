import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RandomQuizStarterForm from "component/randomquizstarterform/RandomQuizStarterForm";
import CustomQuizStarterForm from "component/customquizstarterform/CustomQuizStarterForm";
import AddNewQuestionForm from "component/addnewquestionform/AddNewQuestionForm";
import QuestionsList from "component/allquestions/QuestionsList";
import QuestionDetails from "component/allquestions/QuestionDetails";
import QuestionCard from "component/questioncard/QuestionCard";
import Result from "component/result/Result";
import Header from "component/Header";
import Footer from "component/Footer";

import { QuestionProvider } from "context/QuestionContext";
import { PlayerProvider } from "context/PlayerContext";
import { RandomQuizProvider } from "context/RandomQuizContext";
import { CustomQuizProvider } from "context/CustomQuizContext";
import { ProgressProvider } from "context/ProgressContext";
import { AnswerCorrectnessProvider } from "context/AnswerCorrectnessContext";

import { AddNewQuestionFormProvider } from "context/AddNewQuestionFormContext";

import { Container } from "style/MyStyle";

function App() {
  return (
    <div className='App'>
      <Container>
        <Router>
          <CustomQuizProvider>
            <RandomQuizProvider>
              <PlayerProvider>
                <QuestionProvider>
                  <Header />
                  <Route
                    exact
                    path='/random-quiz'
                    component={RandomQuizStarterForm}
                  />
                  <Route
                    exact
                    path='/custom-quiz'
                    component={CustomQuizStarterForm}
                  />
                  <ProgressProvider>
                    <AnswerCorrectnessProvider>
                      <Route exact path='/quiz' component={QuestionCard} />
                    </AnswerCorrectnessProvider>
                  </ProgressProvider>
                  <Route exact path='/results' component={Result} />
                </QuestionProvider>
              </PlayerProvider>
            </RandomQuizProvider>
          </CustomQuizProvider>
          <ProgressProvider>
            <AddNewQuestionFormProvider>
              <Route
                exact
                path='/add-question'
                component={AddNewQuestionForm}
              />
            </AddNewQuestionFormProvider>
          </ProgressProvider>
          <Route exact path='/questions' component={QuestionsList} />
          <Route exact path='/questions/:id' component={QuestionDetails} />
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
