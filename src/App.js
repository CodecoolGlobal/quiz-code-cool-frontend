import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RandomQuizStarterForm from "./component/randomquizstarterform/RandomQuizStarterForm";
import CustomQuizStarterForm from "./component/customquizstarterform/CustomQuizStarterForm";

import QuestionCard from "./component/questioncard/QuestionCard";
import Result from "./component/result/Result";

import { QuestionProvider } from "./context/QuestionContext";
import { PlayerProvider } from "./context/PlayerContext";
import { RandomStarterFormProvider } from "./context/RandomStarterFormContext";
import { CustomQuizProvider } from "./context/CustomQuizContext";

import { ProgressProvider } from "./context/ProgressContext";

import Header from "./component/Header";
import Footer from "./component/Footer";

import { Container } from "./style/MyStyle";

function App() {
  return (
    <div className='App'>
      <Container>
        <PlayerProvider>
          <QuestionProvider>
            <Router>
              <Header />
              <RandomStarterFormProvider>
                <Route
                  exact
                  path='/random-quiz'
                  component={RandomQuizStarterForm}
                />
              </RandomStarterFormProvider>
              <CustomQuizProvider>
                <Route
                  exact
                  path='/custom-quiz'
                  component={CustomQuizStarterForm}
                />
              </CustomQuizProvider>
              <ProgressProvider>
                <Route exact path='/quiz' component={QuestionCard} />
              </ProgressProvider>
              <Route exact path='/results' component={Result} />
            </Router>
          </QuestionProvider>
        </PlayerProvider>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
