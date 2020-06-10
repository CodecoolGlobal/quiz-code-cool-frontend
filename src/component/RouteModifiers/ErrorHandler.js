import React, {useContext, useEffect} from "react";
import { routes } from "util/routes";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ErrorContext } from 'context/ErrorContext'

export default function ErrorHandler({ component: Component, ...rest }) {
  const [error, setError] = useContext(ErrorContext);
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === routes.error)
      setError(null);
  }, [history.location])

  return (
    <Route
      {...rest}
      render={(props) =>
        error ? <Redirect to={{pathname: routes.error, path: props.history.location.pathname }}/> : <Component {...props} /> 
      }
    />
  );
}
