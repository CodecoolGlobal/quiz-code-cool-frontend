import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizStarterForm from "./component/starterform/QuizStarterForm";
import QuestionCard from "./component/questioncard/QuestionCard";
import Result from "./component/result/Result";

import { QuestionProvider } from "./context/QuestionContext";
import { PlayerProvider } from "./context/PlayerContext";
import { StarterFormProvider } from "./context/StarterFormContext";
import { ProgressProvider } from "./context/ProgressContext";

import Header from "./component/Header";
import Footer from "./component/Footer";

import { Container } from "./style/MyStyle";

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <PlayerProvider>
          <QuestionProvider>
            <Router>
              <StarterFormProvider>
                <Route exact path='/' component={QuizStarterForm} />
              </StarterFormProvider>
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
