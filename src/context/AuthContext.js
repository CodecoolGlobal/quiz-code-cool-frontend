import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { ProgressContext } from "context/ProgressContext";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const SIGN_UP_URL = process.env.REACT_APP_AUTH_URL + "sign-up";
  const SIGN_IN_URL = process.env.REACT_APP_AUTH_URL + "sign-in";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  const recalculateIsReadyToProceed = () => {
    if (username.length > 0 && password.length > 0 && email.length > 0) {
      setIsReadyToProceed(true);
    } else {
      setIsReadyToProceed(false);
    }
  };

  const signUp = () => {
    axios({
      method: "post",
      url: SIGN_UP_URL,
      data: { username, email, password }
    }).then(res => {
      alert(res.data.responseMessage);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        recalculateIsReadyToProceed,
        usernameState: [username, setUsername],
        passwordState: [password, setPassword],
        emailState: [email, setEmail],
        signUp
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
