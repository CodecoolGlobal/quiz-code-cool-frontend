import React, { useContext, useEffect } from "react";
import { ErrorContext } from "context/ErrorContext";
import { Redirect } from "react-router-dom";
import { routes } from "util/routes";
import { WiderContentContainer, H3, Help, H4 } from "style/js/CommonStyles";
import { UserContext } from "context/UserContext";

export default function ErrorPage(props) {
  const [error, setError] = useContext(ErrorContext);
  const { clearFor403 } = useContext(UserContext);

  useEffect(() => {
    if (error && error.response && error.response.status === 403) {
      clearFor403();
      setError(null);
    }
  }, []);

  return error ? (
    <WiderContentContainer>
      <H3>Something went wrong :(</H3>
      {error.response ? (
        <div>
          <H4>{error.response.data.message}</H4>
          <Help>{error.response.data.timestamp}</Help>
        </div>
      ) : (
        <div>
          <H4>{error.message}</H4>
          <Help>Please try again later.</Help>
        </div>
      )}
    </WiderContentContainer>
  ) : (
    <React.Fragment>
      <Redirect to={props.location.path ? props.location.path : routes.home} />
    </React.Fragment>
  );
}
