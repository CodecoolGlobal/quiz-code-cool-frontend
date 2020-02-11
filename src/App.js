import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizStarterForm from "./component/QuizStarterForm";
import QuestionCard from "./component/QuestionCard";
import Result from "./component/Result";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={QuizStarterForm} />
        <Route exact path='/quiz' component={QuestionCard} />
        <Route exact path='/results' component={Result} />
      </div>
    </Router>
  );
}

export default App;
