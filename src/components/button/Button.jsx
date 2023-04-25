import React from "react";
import styled from "styled-components";

const StyledButton = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px 4px;
  gap: 6px;
  background: #2f3239;
  border-radius: 5px;
  img {
    width: 16px;
    height: 16px;
  }
  p {
    font-size: 14px;
    line-height: 120%;
  }
  &:hover{
    opacity: 0.5;
  }
`;

const Button = ({ image, text, alt }) => {
  return (
    <StyledButton>
      <img src={image} alt={alt} />
      <p>{text}</p>
    </StyledButton>
  );
};

export default Button;
