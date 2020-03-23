import React, { useContext } from "react";
import { ProgressContext } from "context/ProgressContext";
import SingUpInputs from "component/authentication/SingUpInputs";

import { ContentContainer, H3, Button } from "style/MyStyle";

export default function SignUpForm() {
  const [isReadyToProceed, setIsReadyToProceed] = useContext(ProgressContext);

  const submit = () => {
    setIsReadyToProceed(false);
  };

  return (
    <ContentContainer>
      <H3>Sign Up</H3>
      <SingUpInputs />
      <Button disabled={!isReadyToProceed} onClick={submit}>
        Sign up
      </Button>
    </ContentContainer>
  );
}
