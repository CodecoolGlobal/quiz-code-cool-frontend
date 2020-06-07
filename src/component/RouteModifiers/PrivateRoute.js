import React, {useContext, useEffect} from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { UserContext } from 'context/UserContext'

export default function PrivateRoute({ component: Component, ...rest }) {
  const {usernameState, isExpired} = useContext(UserContext);
  const username = usernameState[0];
  const history = useHistory();

  useEffect(() => {
    isExpired();
  }, [history.location])

  return (
    <Route
      {...rest}
      render={(props) =>
        username !== null ? <Component {...props} /> : <Redirect to={{pathname: '/sign-in' }}/>
      }
    />
  );
}
