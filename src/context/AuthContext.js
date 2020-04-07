import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { ProgressContext } from "context/ProgressContext";
import { UserContext } from "context/UserContext";

export const AuthContext = createContext();

export const AuthProvider = props => {
  const SIGN_UP_URL = process.env.REACT_APP_AUTH_URL + "sign-up";
  const SIGN_IN_URL = process.env.REACT_APP_AUTH_URL + "sign-in";
  const SIGN_OUT_URL = process.env.REACT_APP_AUTH_URL + "sign-out";

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const { usernameState, rolesState } = useContext(UserContext);
  const setUsername = usernameState[1];
  const setRoles = rolesState[1];

  const recalculateIsReadyToProceed = path => {
    if (
      usernameInput.length >= 5 &&
      usernameInput.length <= 20 &&
      passwordInput.length >= 8 &&
      passwordInput.match("^[A-Za-z0-9]+$")
    ) {
      if (
        (path === "/sign-up" &&
          emailInput.length > 0 &&
          isEmailValid(emailInput)) ||
        (path === "/sign-in" && emailInput === "")
      ) {
        setIsReadyToProceed(true);
      }
    } else {
      setIsReadyToProceed(false);
    }
  };

  const isEmailValid = mail => {
    if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    }
    return false;
  };

  const clearCredentials = () => {
    setEmailInput("");
    setPasswordInput("");
    setUsernameInput("");
  };

  const setUpUserData = (username, roles) => {
    localStorage.setItem("username", username);
    localStorage.setItem("roles", roles);
    setUsername(username);
    setRoles(roles);
  };

  const signUp = history => {
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
        setUpUserData(res.data.username, res.data.roles);
        history.push("/");
      })
      .catch(() => {
        alert("Incorrect username or password.");
      });
  };

  const signOut = () => {
    localStorage.clear();
    axios({
      method: "post",
      url: SIGN_OUT_URL,
      withCredentials: true
    })
      .then(res => {
        setUsername(null);
        setRoles(null);
      })
      .catch(error => {
        alert(`Logout failed. ${error}`);
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
        signOut,
        clearCredentials
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
