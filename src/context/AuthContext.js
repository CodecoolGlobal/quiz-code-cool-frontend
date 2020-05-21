import React, { useState, createContext, useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import { UserContext } from "context/UserContext";
import { api_signUp, api_signOut, api_signIn } from "api/apiConnection";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const setIsReadyToProceed = useContext(ProgressContext)[1];

  const { usernameState, rolesState } = useContext(UserContext);
  const setUsername = usernameState[1];
  const setRoles = rolesState[1];

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
      }
    } else {
      setIsReadyToProceed(false);
    }
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

  const setUpUserData = (username, roles) => {
    localStorage.setItem("username", username);
    localStorage.setItem("roles", roles);
    setUsername(username);
    setRoles(roles);
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
        alert(`Connection refused. Please, try again later.`);
      } else {
        alert(
          `Registration cannot be finished. ${error.response.data} is already taken.`
        );
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
      setUpUserData(responseData.username, responseData.roles);
      history.push("/");
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Incorrect username or password.");
      } else {
        alert(`Something went wrong. Please try it later.\n${error}`);
      }
    }
  };

  const signOut = async () => {
    localStorage.clear();
    try {
      await api_signOut();
      setUsername(null);
      setRoles(null);
    } catch (error) {
      alert(`Logout failed.\n${error}`);
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
