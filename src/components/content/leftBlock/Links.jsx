import React from "react";
import styled from "styled-components";
import github from "../../../../public/assets/image/links/github.png";
import behance from "../../../../public/assets/image/links/BehanceLogo.png";
import telegram from "../../../../public/assets/image/links/TelegramLogo.png";
import linkedIn from "../../../../public/assets/image/links/linkedin.png";

const StyledLinks = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
  }
  &:hover img:not(:hover){
    opacity: 0.3;
  }
`;

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
