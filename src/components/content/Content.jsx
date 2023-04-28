import React from "react";
import ContentLeft from "./leftBlock/ContentLeft";
import ContentRight from "./rightBlock/ContentRight";
import { StyledContent } from "./Content.styles";


const Content = () => {
  return (
    <StyledContent>
      <ContentLeft />
      <ContentRight />
    </StyledContent>
  );
};

export default Content;
