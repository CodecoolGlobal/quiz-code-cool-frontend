import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "util/routes";
import { WiderContentContainer, H3, Help, H4 } from "style/js/CommonStyles";
import { UserContext } from "context/UserContext";

export default function ErrorPage(props) {
  const error = props.location.state ? props.location.state.error : null;
  const { clearFor403 } = useContext(UserContext);
  const history = useHistory()

  useEffect(() => {
    if (!error) history.push(routes.home);
    else if (error.response && error.response.status === 403) {
      clearFor403();
    }
  }, []);

  return error && (
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
  );
}
