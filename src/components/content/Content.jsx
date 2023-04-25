import React from "react";
import ContentLeft from "./leftBlock/ContentLeft";
import ContentRight from "./rightBlock/ContentRight";
import styled from "styled-components";

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3.5fr;
  gap: 30px;
  justify-content: center;
  padding: 0 200px;
  margin-top: 50px;
`;

const Content = () => {
  return (
    <StyledContent>
      <ContentLeft />
      <ContentRight />
    </StyledContent>
  );
};

export default Content;
