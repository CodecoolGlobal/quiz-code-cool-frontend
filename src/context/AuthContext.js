import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { ProgressContext } from "context/ProgressContext";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const SIGN_UP_URL = process.env.REACT_APP_AUTH_URL + "sign-up";
  const SIGN_IN_URL = process.env.REACT_APP_AUTH_URL + "sign-in";

  const [username, setUsername] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const recalculateIsReadyToProceed = path => {
    if (usernameInput.length > 0 && passwordInput.length > 0) {
      if (
        (path === "/sign-up" && emailInput.length > 0) ||
        (path === "/sign-in" && emailInput === "")
      ) {
        setIsReadyToProceed(true);
      }
    } else {
      setIsReadyToProceed(false);
    }
  };

  const clearCredentials = () => {
    setEmailInput("");
    setPasswordInput("");
    setUsernameInput("");
  };

  const signUp = () => {
    axios({
      method: "post",
      url: SIGN_UP_URL,
      data: { username: usernameInput, email: emailInput, password: passwordInput }
    }).then(res => {
      alert(`Successful registration for username "${res.data}".`);
        clearCredentials()
    }).catch(error => {
      alert(`Registration cannot be finished. ${error.response.data} is already taken.`)
      setIsReadyToProceed(false);
    });
  };

  const signIn = (history) => {
    axios.post(
      SIGN_IN_URL,
      { username: usernameInput, password: passwordInput },
      { withCredentials: true}
      
    ).then((res) => {
      console.log(res)
      setUsername(res.data.username);
      history.push("/")
      }).catch(() => {
        alert("Incorrect username or password.")
      }
      );
  };

  return (
    <AuthContext.Provider
      value={{
        recalculateIsReadyToProceed,
        usernameInputState: [usernameInput, setUsernameInput],
        passwordInputState: [passwordInput, setPasswordInput],
        emailInputState: [emailInput, setEmailInput],
        usernameState: [username, setUsername],
        signUp,
        signIn,
        clearCredentials
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
