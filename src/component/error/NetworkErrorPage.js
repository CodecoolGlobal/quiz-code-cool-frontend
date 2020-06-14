import React from "react";
import { WiderContentContainer, H3, Help, H4 } from "style/js/CommonStyles";
import { Redirect } from "react-router-dom";
import { routes } from "util/routes";

export default function NetworkErrorPage(props) {
  const error = props.location.state ? props.location.state.error : null;

  return (
    error ? 
      <WiderContentContainer>
        <H3>Something went wrong :(</H3>
        <div>
          <H4>{error.message}</H4>
          <Help>Please try again later.</Help>
        </div>
      </WiderContentContainer>
    : <Redirect to={routes.home}/>
  );
}
