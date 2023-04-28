import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ image, text, alt }) => {
  return (
    <StyledButton>
      <img src={image} alt={alt} />
      <p>{text}</p>
    </StyledButton>
  );
};

export default Button;
