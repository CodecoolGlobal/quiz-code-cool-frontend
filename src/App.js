import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "util/routes";
import PrivateRoute from "component/RouteModifiers/PrivateRoute";
import DisableRouteWhenAuthenticated from "component/RouteModifiers/DisableRouteWhenAuthenticated";

import AuthForm from "component/authentication/AuthForm";
import UserDetails from "component/user/UserDetails";
import Home from "component/user/Home";
import RandomQuizStarterForm from "component/quizzes/random/randomquizstarterform/RandomQuizStarterForm";
import CustomQuizStarterForm from "component/quizzes/custom/customquizstarterform/CustomQuizStarterForm";
import AddNewQuestionForm from "component/newquestion/NewQuestionForm";
import AllQuestionsList from "component/questions/AllQuestionsList";
import AllCustomQuizzesList from "component/quizzes/custom/customQuizList/AllCustomQuizzesList";
import QuestionDetails from "component/questions/QuestionDetails";
import QuestionCard from "component/quizzes/questioncard/QuestionCard";
import Result from "component/quizzes/result/Result";
import CustomQuizSelect from "component/quizzes/custom/CustomQuizSelect";
import QuestionSelect from "component/questions/QuestionSelect";
import NewCustomQuiz from "component/quizzes/custom/newcustomquiz/NewCustomQuiz";
import UserList from "component/user/UserList";

import Header from "component/layout/header/Header";
import Footer from "component/layout/footer/Footer";

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
import { UsersProvider } from "context/UsersContext";

import { applicationTheme } from "style/js/CommonStyles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiPaginationItem: {
      // Name of the rule
      root: {
        // Some CSS
        color: applicationTheme.color1,
      },
    },
    MuiPagination: {
      ul: {
        margin: "10px",
        justifyContent: "center",
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        // Some CSS
        color: applicationTheme.color2,
      },
    },
    MuiSlider: {
      colorPrimary: {
        color: applicationTheme.color3,
      },
    },
    MuiBackdrop: {
      root: {
        zIndex: 10,
        color: "#fff",
      },
    },
  },
});

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
                                      <ThemeProvider theme={theme}>
                                        <Header />
                                        <DisableRouteWhenAuthenticated
                                          exact
                                          path={routes.auth.signIn}
                                          component={AuthForm}
                                        />
                                        <DisableRouteWhenAuthenticated
                                          exact
                                          path={routes.auth.signUp}
                                          component={AuthForm}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.home}
                                          component={Home}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.randomQuiz}
                                          component={RandomQuizStarterForm}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.customQuiz.all}
                                          component={AllCustomQuizzesList}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.customQuiz.new}
                                          component={NewCustomQuiz}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.customQuiz.start}
                                          component={CustomQuizStarterForm}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.customQuiz.base}
                                          component={CustomQuizSelect}
                                        />
                                        <AnswerCorrectnessProvider>
                                          <PrivateRoute
                                            exact
                                            path={routes.quiz}
                                            component={QuestionCard}
                                          />
                                        </AnswerCorrectnessProvider>
                                        <PrivateRoute
                                          exact
                                          path={routes.result}
                                          component={Result}
                                        />
                                        <NewQuestionFormProvider>
                                          <PrivateRoute
                                            exact
                                            path={routes.question.new}
                                            component={AddNewQuestionForm}
                                          />
                                        </NewQuestionFormProvider>
                                        <PrivateRoute
                                          exact
                                          path={routes.question.base}
                                          component={QuestionSelect}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.question.all}
                                          component={AllQuestionsList}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.question.id}
                                          component={QuestionDetails}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.user.all}
                                          component={UserList}
                                        />
                                        <PrivateRoute
                                          exact
                                          path={routes.user.id}
                                          component={UserDetails}
                                        />
                                      </ThemeProvider>
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
