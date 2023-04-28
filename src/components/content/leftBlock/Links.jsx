import React from "react";
import github from "../../../../public/assets/image/links/github.svg";
import behance from "../../../../public/assets/image/links/BehanceLogo.svg";
import telegram from "../../../../public/assets/image/links/TelegramLogo.svg";
import linkedIn from "../../../../public/assets/image/links/linkedin.svg";
import { StyledLinks } from "./leftBlockStyles/Links.styles";

const Links = () => {
  return (
    <StyledLinks>
      <img src={github} alt="github" />
      <img src={behance} alt="behance" />
      <img src={telegram} alt="telegram" />
      <img src={linkedIn} alt="linkedIn" />
    </StyledLinks>
  );
};

export default Links;
