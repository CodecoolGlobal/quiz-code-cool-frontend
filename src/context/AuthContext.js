import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { ProgressContext } from "context/ProgressContext";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const SIGN_UP_URL = process.env.REACT_APP_AUTH_URL + "sign-up";
  const SIGN_IN_URL = process.env.REACT_APP_AUTH_URL + "sign-in";

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const recalculateIsReadyToProceed = path => {
    if (
      usernameInput.length >= 5 &&
      usernameInput.length <= 20 &&
      passwordInput.length >= 8 &&
      passwordInput.match("^[A-Za-z0-9]+$")
    ) {
      if (
        (path === "/sign-up" && emailInput.length > 0 && isEmailValid(emailInput)) ||
        (path === "/sign-in" && emailInput === "")
      ) {
        setIsReadyToProceed(true);
      }
    } else {
      setIsReadyToProceed(false);
    }
  };

  const isEmailValid = (mail) => {
    if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    }
    return false;
  }

  const clearCredentials = () => {
    setEmailInput("");
    setPasswordInput("");
    setUsernameInput("");
  };

  const signUp = () => {
    axios({
      method: "post",
      url: SIGN_UP_URL,
      data: {
        username: usernameInput,
        email: emailInput,
        password: passwordInput
      }
    })
      .then(res => {
        alert(`Successful registration for username "${res.data}".`);
        clearCredentials();
      })
      .catch(error => {
        alert(
          `Registration cannot be finished. ${error.response.data} is already taken.`
        );
        setIsReadyToProceed(false);
      });
  };

  const signIn = history => {
    axios
      .post(
        SIGN_IN_URL,
        { username: usernameInput, password: passwordInput },
        { withCredentials: true }
      )
      .then(res => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("roles", res.data.roles);

        history.push("/");
      })
      .catch(() => {
        alert("Incorrect username or password.");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        recalculateIsReadyToProceed,
        usernameInputState: [usernameInput, setUsernameInput],
        passwordInputState: [passwordInput, setPasswordInput],
        emailInputState: [emailInput, setEmailInput],
        signUp,
        signIn,
        clearCredentials
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
