import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from 'context/UserContext'
import {routes} from "util/routes"

export default function DisableRoute({ component: Component, ...rest }) {
  const {usernameState} = useContext(UserContext);
  const username = usernameState[0];

  return (
    <Route
      {...rest}
      render={(props) =>
        username ?  <Redirect to={{pathname: routes.home }}/> : <Component {...props} /> 
      }
    />
  );
}
