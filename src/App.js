import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AuthForm from "component/authentication/AuthForm";

import PrivateRoute from "component/RouteModifiers/PrivateRoute";
import DisableRouteWhenAuthenticated from "component/RouteModifiers/DisableRouteWhenAuthenticated";
import UserDetails from "component/user/UserDetails";
import Home from "component/user/Home";
import RandomQuizStarterForm from "component/quizzes/random/randomquizstarterform/RandomQuizStarterForm";
import CustomQuizStarterForm from "component/quizzes/custom/customquizstarterform/CustomQuizStarterForm";
import AddNewQuestionForm from "component/newquestion/NewQuestionForm";
import AllQuestionsList from "component/questions/AllQuestionsList";
import QuestionDetails from "component/questions/QuestionDetails";
import QuestionCard from "component/quizzes/questioncard/QuestionCard";
import Result from "component/quizzes/result/Result";
import Header from "component/layout/header/Header";
import Footer from "component/layout/footer/Footer";
import CustomQuizSelect from "component/quizzes/custom/CustomQuizSelect";
import NewCustomQuiz from "component/quizzes/custom/newcustomquiz/NewCustomQuiz";
import { AuthProvider } from "context/AuthContext";

import { UserProvider } from "context/UserContext";
import { QuizProvider } from "context/QuizContext";
import { PlayerProvider } from "context/PlayerContext";
import { RandomQuizProvider } from "context/RandomQuizContext";
import { CustomQuizProvider } from "context/CustomQuizContext";
import { ProgressProvider } from "context/ProgressContext";
import { AnswerCorrectnessProvider } from "context/AnswerCorrectnessContext";
import { NewQuestionFormProvider } from "context/NewQuestionFormContext";
import { CategoryProvider } from "context/CategoryContext";
import { TypeProvider } from "context/TypeContext";
import { StatusProvider } from "context/StatusContext";
import { RestoreInputsProvider } from "context/RestoreFiltersContext";
import { QuestionFilterProvider } from "context/QuestionFilterContext";
import { NewQuizProvider } from "context/NewQuizContext";
import { QuestionDetailsProvider } from "context/QuestionDetailsContext";
import UserList from "component/user/UserList";
import { UsersProvider } from "context/UsersContext";

function App() {
  return (
    <div className='App'>
      <Router>
        <UserProvider>
          <CategoryProvider>
            <StatusProvider>
              <TypeProvider>
                <UsersProvider>
                  <RestoreInputsProvider>
                    <QuestionFilterProvider>
                      <CustomQuizProvider>
                        <RandomQuizProvider>
                          <PlayerProvider>
                            <QuizProvider>
                              <ProgressProvider>
                                <NewQuizProvider>
                                  <AuthProvider>
                                    <QuestionDetailsProvider>
                                      <Header />
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
                                        path='/users/:id'
                                        component={UserDetails}
                                      />
                                      <PrivateRoute
                                        exact
                                        path='/'
                                        component={Home}
                                      />
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
                                        component={AllQuestionsList}
                                      />
                                      <PrivateRoute
                                        exact
                                        path='/questions/:id'
                                        component={QuestionDetails}
                                      />
                                      <PrivateRoute
                                        exact
                                        path='/users'
                                        component={UserList}
                                      />
                                    </QuestionDetailsProvider>
                                  </AuthProvider>
                                </NewQuizProvider>
                              </ProgressProvider>
                            </QuizProvider>
                          </PlayerProvider>
                        </RandomQuizProvider>
                      </CustomQuizProvider>
                    </QuestionFilterProvider>
                  </RestoreInputsProvider>
                </UsersProvider>
              </TypeProvider>
            </StatusProvider>
          </CategoryProvider>
        </UserProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
