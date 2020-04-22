import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from 'context/UserContext'

export default function DisableRoute({ component: Component, ...rest }) {
  const {getFromLocalStorage} = useContext(UserContext);
  const username = getFromLocalStorage("username");

  return (
    <Route
      {...rest}
      render={(props) =>
        username !== null ? <Redirect to={{pathname: '/' }}/> : <Component {...props} /> 
      }
    />
  );
}
