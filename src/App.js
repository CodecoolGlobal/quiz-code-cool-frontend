import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizStarterForm from "./component/starterform/QuizStarterForm";
import QuestionCard from "./component/QuestionCard";
import Result from "./component/Result";

import { QuestionProvider } from "./context/QuestionContext";
import { PlayerProvider } from "./context/PlayerContext";
import { StarterFormProvider } from "./context/StarterFormContext";

function App() {
  return (
    <div className='App'>
      <PlayerProvider>
        <QuestionProvider>
          <Router>
            <StarterFormProvider>
              <Route exact path='/' component={QuizStarterForm} />
            </StarterFormProvider>
            <Route exact path='/quiz' component={QuestionCard} />
            <Route exact path='/results' component={Result} />
          </Router>
        </QuestionProvider>
      </PlayerProvider>
    </div>
  );
}

export default App;
