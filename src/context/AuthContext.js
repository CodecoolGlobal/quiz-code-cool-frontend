import React, { useState, createContext, useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import { UserContext } from "context/UserContext";
import { api_signUp, api_signOut, api_signIn } from "api/authConnection";
import { handleError } from "util/errorUtil";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const { usernameState, rolesState, userIdState, expState } = useContext(UserContext);
  const setUsername = usernameState[1];
  const setRoles = rolesState[1];
  const setUserId = userIdState[1];
  const setExp = expState[1]

  const recalculateIsReadyToProceed = (path) => {
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
    console.log(roles)
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
        handleError(error, "Connection refused.");
      } else {
        handleError(error, `Registration cannot be finished. ${error.response.data} is already taken.`);
      }
      setIsReadyToProceed(false);
    }
  };

  const signIn = async (history) => {
    try {
      const responseData = await api_signIn({
        username: usernameInput,
        password: passwordInput,
      });
      setUpUserData(responseData);
      history.push("/");
    } catch (error) {
      if (error.response && error.response.status === 403) {
        handleError(error, "Incorrect username or password.");
      } else {
        handleError(error, "Connection refused.");
      }
    }
  };

  const signOut = async () => {
    localStorage.clear();
    try {
      await api_signOut();
      setUsername(null);
      setRoles(null);
      setUserId(null);
      setExp(null);
    } catch (error) {
      handleError(error, "Failed to log out.");
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
