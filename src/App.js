import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUpForm from "component/authentication/signup/SignUpForm";
import SignInForm from "component/authentication/signin/SignInForm";

import RandomQuizStarterForm from "component/quizzes/random/randomquizstarterform/RandomQuizStarterForm";
import CustomQuizStarterForm from "component/quizzes/custom/customquizstarterform/CustomQuizStarterForm";
import AddNewQuestionForm from "component/newquestion/NewQuestionForm";
import QuestionsList from "component/questions/QuestionsList";
import QuestionDetails from "component/questions/QuestionDetails";
import QuestionCard from "component/quizzes/questioncard/QuestionCard";
import Result from "component/quizzes/result/Result";
import Header from "component/layout/Header";
import Footer from "component/layout/Footer";
import CustomQuizSelect from "component/quizzes/custom/CustomQuizSelect";
import NewCustomQuiz from "component/quizzes/custom/newcustomquiz/NewCustomQuiz";

import { QuestionProvider } from "context/QuestionContext";
import { PlayerProvider } from "context/PlayerContext";
import { RandomQuizProvider } from "context/RandomQuizContext";
import { CustomQuizProvider } from "context/CustomQuizContext";
import { ProgressProvider } from "context/ProgressContext";
import { AnswerCorrectnessProvider } from "context/AnswerCorrectnessContext";

import { NewQuestionFormProvider } from "context/NewQuestionFormContext";
import { CategoryProvider } from "context/CategoryContext";
import { TypeProvider } from "context/TypeContext";
import { RestoreFiltersProvider } from "context/RestoreFiltersContext";

import { Container } from "style/MyStyle";

function App() {
  return (
    <div className='App'>
      <Container>
        <CategoryProvider>
          <TypeProvider>
            <RestoreFiltersProvider>
              <CustomQuizProvider>
                <RandomQuizProvider>
                  <PlayerProvider>
                    <QuestionProvider>
                      <ProgressProvider>
                        <Router>
                          <Header />
                          <Route exact path='/sign-in' component={SignInForm}/>
                          <Route exact path='/sign-up' component={SignUpForm}/>
                          <Route
                            exact
                            path='/random-quiz'
                            component={RandomQuizStarterForm}
                          />
                          <Route
                            exact
                            path='/custom-quiz/new'
                            component={NewCustomQuiz}
                          />
                          <Route
                            exact
                            path='/custom-quiz/start'
                            component={CustomQuizStarterForm}
                          />
                          <Route
                            exact
                            path='/custom-quiz'
                            component={CustomQuizSelect}
                          />
                          <AnswerCorrectnessProvider>
                            <Route
                              exact
                              path='/quiz'
                              component={QuestionCard}
                            />
                          </AnswerCorrectnessProvider>
                          <Route exact path='/results' component={Result} />
                          <NewQuestionFormProvider>
                            <Route
                              exact
                              path='/add-question'
                              component={AddNewQuestionForm}
                            />
                          </NewQuestionFormProvider>
                          <Route
                            exact
                            path='/questions'
                            component={QuestionsList}
                          />
                          <Route
                            exact
                            path='/questions/:id'
                            component={QuestionDetails}
                          />
                        </Router>
                      </ProgressProvider>
                    </QuestionProvider>
                  </PlayerProvider>
                </RandomQuizProvider>
              </CustomQuizProvider>
            </RestoreFiltersProvider>
          </TypeProvider>
        </CategoryProvider>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
