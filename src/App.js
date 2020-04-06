import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AuthForm from "component/authentication/AuthForm";

import PrivateRoute from "component/RouteModifiers/PrivateRoute";
import DisableRouteWhenAuthenticated from "component/RouteModifiers/DisableRouteWhenAuthenticated";
import UserDetails from "component/user/UserDetails";
import Home from "component/user/Home";
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

import { AuthProvider } from "context/AuthContext";
import { UserProvider } from "context/UserContext";
import { QuestionProvider } from "context/QuizContext";
import { PlayerProvider } from "context/PlayerContext";
import { RandomQuizProvider } from "context/RandomQuizContext";
import { CustomQuizProvider } from "context/CustomQuizContext";
import { ProgressProvider } from "context/ProgressContext";
import { AnswerCorrectnessProvider } from "context/AnswerCorrectnessContext";
import { NewQuestionFormProvider } from "context/NewQuestionFormContext";
import { CategoryProvider } from "context/CategoryContext";
import { TypeProvider } from "context/TypeContext";
import { RestoreFiltersProvider } from "context/RestoreFiltersContext";
import { MenuProvider } from "context/MenuContext";


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
                        <UserProvider>
                          <AuthProvider>
                            <Router>
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
                              <PrivateRoute
                                exact
                                path='/user'
                                component={UserDetails}
                              />
                              <PrivateRoute exact path='/' component={Home} />
                              <PrivateRoute
                                exact
                                path='/random-quiz'
                                component={RandomQuizStarterForm}
                              />
                              <PrivateRoute
                                exact
                                path='/custom-quiz/new'
                                component={NewCustomQuiz}
                              />
                              <PrivateRoute
                                exact
                                path='/custom-quiz/start'
                                component={CustomQuizStarterForm}
                              />
                              <PrivateRoute
                                exact
                                path='/custom-quiz'
                                component={CustomQuizSelect}
                              />
                              <AnswerCorrectnessProvider>
                                <PrivateRoute
                                  exact
                                  path='/quiz'
                                  component={QuestionCard}
                                />
                              </AnswerCorrectnessProvider>
                              <PrivateRoute
                                exact
                                path='/results'
                                component={Result}
                              />
                              <NewQuestionFormProvider>
                                <PrivateRoute
                                  exact
                                  path='/add-question'
                                  component={AddNewQuestionForm}
                                />
                              </NewQuestionFormProvider>
                              <PrivateRoute
                                exact
                                path='/questions'
                                component={QuestionsList}
                              />
                              <PrivateRoute
                                exact
                                path='/questions/:id'
                                component={QuestionDetails}
                              />
                            </Router>
                          </AuthProvider>
                        </UserProvider>
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
