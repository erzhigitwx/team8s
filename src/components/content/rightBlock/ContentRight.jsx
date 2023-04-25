import React from "react";
import styled from "styled-components";
import { FlexRow } from "../../../styles/styled";
import AboutUser from "./AboutUser";
import Skills from "./Skills";

const StyledContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px 32px;
  background: #1a1c22;
  border-radius: 15px;
`;
const StyledContentRightHeader = styled(FlexRow)`
  margin-top: 5px;
  align-items: center;
  gap: 16px;
  .right-content__title {
    color: #5bd424;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 0px;
    gap: 4px;
    border-bottom: 1px solid #5bd424;
  }
  p:hover {
    opacity: 0.5;
  }
`;

const ContentRight = () => {
  return (
    <StyledContentRight>
      <StyledContentRightHeader>
        <p className="right-content__title">Projects & Skills</p>
        <p>Education & Work</p>
      </StyledContentRightHeader>

      <AboutUser />

      <Skills />
    </StyledContentRight>
  );
};

export default ContentRight;
