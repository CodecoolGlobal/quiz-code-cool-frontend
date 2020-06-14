import React from "react";
import { Image404, BackNavLink } from "./styles";
import image404 from "style/img/404.png";
import { WiderContentContainer, H4, Help } from "style/js/CommonStyles";
import { routes } from "util/routes";


export default function NotFoundPage() {
  return (
    <WiderContentContainer>
      <Image404
        title='404 page picture'
        src={image404}
        alt='404 page picture'
      ></Image404>
      <H4>Page not found</H4>
      <Help><BackNavLink to={routes.home}>Back to home</BackNavLink></Help>
    </WiderContentContainer>
  );
}
