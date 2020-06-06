import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from 'context/UserContext'

export default function DisableRoute({ component: Component, ...rest }) {
  const {usernameState} = useContext(UserContext);
  const username = usernameState[0];

  return (
    <Route
      {...rest}
      render={(props) =>
        username !== null ? <Redirect to={{pathname: '/' }}/> : <Component {...props} /> 
      }
    />
  );
}
