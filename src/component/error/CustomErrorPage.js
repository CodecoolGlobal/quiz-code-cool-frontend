import React, { useContext, useEffect } from "react";
import { WiderContentContainer, H3, Help, H4 } from "style/js/CommonStyles";
import { UserContext } from "context/UserContext";
import { Redirect } from "react-router-dom";
import { routes } from "util/routes";

export default function CustomErrorPage(props) {
  const error = props.location.state ? props.location.state.error : null;
  const { clearFor403 } = useContext(UserContext);

  useEffect(() => {
    if (error && error.response && error.response.status === 403) {
      clearFor403();
    }
  }, []);

  return error && error.response ? (
    <WiderContentContainer>
      <H3>Something went wrong :(</H3>
      <div>
        <H4>{error.response.data.message}</H4>
        <Help>{error.response.data.timestamp}</Help>
      </div>
    </WiderContentContainer>
  ) : (
    <Redirect to={routes.home}/>
  );
}
