import React from "react";
import arrowLeft from "../../../public/assets/image/arrow-left.svg";
import {
  StyledBack,
  StyledHeader,
  StyledLogo,
  StyledMenu,
  StyledNavbar,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavbar>
        <StyledMenu>
          <div />
        </StyledMenu>
        <StyledBack>
          <img src={arrowLeft} alt="arrow left" />
          <p>Back</p>
        </StyledBack>
      </StyledNavbar>

      <StyledLogo>
        team<span>8</span>s
      </StyledLogo>
    </StyledHeader>
  );
};

export default Header;
