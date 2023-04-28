import React from "react";
import Button from "../../button/Button";
import users from "../../../../public/assets/image/users.svg";
import {
  StyledAbout,
  StyledSearchTeam,
} from "./rightBlockStyles/AboutUser.styles";

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
