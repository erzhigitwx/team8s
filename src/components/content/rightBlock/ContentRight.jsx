import React from "react";
import AboutUser from "./AboutUser";
import {
  StyledContentRight,
  StyledContentRightHeader,
} from "./rightBlockStyles/ContentRight.styles";
import Knowledge from "./Knowledge";

const ContentRight = () => {
  return (
    <StyledContentRight>
      <StyledContentRightHeader>
        <p className="right-content__title">Projects & Skills</p>
        <p>Education & Work</p>
      </StyledContentRightHeader>

      <AboutUser />

      <Knowledge />
    </StyledContentRight>
  );
};

export default ContentRight;
