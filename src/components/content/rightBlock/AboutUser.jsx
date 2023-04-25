import React from "react";
import styled from "styled-components";
import Button from "../../button/Button";
import { FlexRow } from "../../../styles/styled";
import users from "../../../../public/assets/image/users.png";

const StyledAbout = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .right-content__about-des {
    font-size: 14px;
    line-height: 120%;
  }
`;
const StyledSearchTeam = styled(FlexRow)`
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

const AboutUser = () => {
  return (
    <>
      <StyledAbout>
        <p>About me</p>
        <p className="right-content__about-des">
          Front-end developer with 4 years of experience. Passionate about
          solving complex problems and building innovative solutions. I have a
          strong understanding of software development best practices.
          Collaborative team player with effective communication skills.
        </p>
      </StyledAbout>
      <StyledSearchTeam>
        <p>Team</p>
        <Button text={"Cool Developers"} image={users} alt={"users"} />
      </StyledSearchTeam>
    </>
  );
};

export default AboutUser;
