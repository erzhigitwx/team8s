import React from "react";
import styled from "styled-components";

const StyledButtonFramework = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px 4px;
  gap: 10px;
  width: 100px;
  border-radius: 5px;
  background: ${(props) => props.background};
`;

const ButtonFrameW = ({ background, frame }) => {
  return (
    <StyledButtonFramework background={background}>
      {frame}
    </StyledButtonFramework>
  );
};

export default ButtonFrameW;
