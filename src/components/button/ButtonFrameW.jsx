import React from "react";
import { StyledButtonFramework } from "./ButtonFrameW.styles";

const ButtonFrameW = ({ background, frame }) => {
  return (
    <StyledButtonFramework background={background}>
      {frame}
    </StyledButtonFramework>
  );
};

export default ButtonFrameW;
