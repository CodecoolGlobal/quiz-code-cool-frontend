import React, { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProgressContext } from "context/ProgressContext";
import { UserContext } from "context/UserContext";
import { api_signUp, api_signOut, api_signIn } from "api/authConnection";
import { handleError } from "util/errorUtil";
import {routes} from "util/routes";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const { usernameState, rolesState, userIdState, expState } = useContext(UserContext);
  const setUsername = usernameState[1];
  const setRoles = rolesState[1];
  const setUserId = userIdState[1];
  const setExp = expState[1]

  const recalculateIsReadyToProceed = () => {
    const path = history.location.pathname;
    if (
      usernameInput.length >= 5 &&
      usernameInput.length <= 20 &&
      passwordInput.length >= 8 &&
      /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(passwordInput)
    ) {
      if (
        (path === routes.auth.signUp &&
          emailInput.length > 0 &&
          isEmailValid(emailInput)) ||
        (path === routes.auth.signIn && emailInput === "")
      ) {
        setIsReadyToProceed(true);
        return;
      }
    } 
    setIsReadyToProceed(false);
  };

  const isEmailValid = (mail) => {
    if (mail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    }
    return false;
  };

  const clearCredentials = () => {
    setEmailInput("");
    setPasswordInput("");
    setUsernameInput("");
  };

  const setUpUserData = (responseData) => {
    const {username, roles, exp, userId} = responseData;
    localStorage.setItem("username", username);
    localStorage.setItem("roles", roles);
    localStorage.setItem("exp", exp);
    localStorage.setItem("userId", userId);
    setUsername(username);
    setRoles(roles);
    setUserId(userId);
    setExp(exp);
  };

  const signUp = async () => {
    try {
      const responseData = await api_signUp({
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
      });
      alert(`Successful registration for username "${responseData}".`);
      clearCredentials();
    } catch (error) {
      if (!error.response) {
        handleError(error);
      } else {
        handleError(error);
      }
      setIsReadyToProceed(false);
    }
  };

  const signIn = async () => {
    try {
      const responseData = await api_signIn({
        username: usernameInput,
        password: passwordInput,
      });
      setUpUserData(responseData);
      history.push(routes.home);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Incorrect username or password.");
      } else {
        handleError(error);
      }
    }
  };

  const signOut = async () => {
    localStorage.clear();
    try {
      setUsername(null);
      setRoles(null);
      setUserId(null);
      setExp(null);
      await api_signOut();
    } catch (error) {
      handleError(error);
    }
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
        clearCredentials,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
