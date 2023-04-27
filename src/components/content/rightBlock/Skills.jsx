import React from "react";
import styled from "styled-components";
import Button from "../../button/Button";
import { mockFrameworks, mockLanguages, mockProjects } from "./mockData";
import linkImg from "../../../../public/assets/image/links/external-link.png";
import ButtonFrameW from "../../button/ButtonFrameW";

const StyledProjects = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
const StyledFrameworks = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
const StyledLanguages = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .skills-languages {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    div {
      height: 40px;
      width: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background: #2f3239;
      border-radius: 5px;
    }
  }
`;

const Skills = () => {
  return (
    <>
      <StyledProjects>
        <p>Projects</p>
        <div>
          {mockProjects.map((item, index) => (
            <Button key={index} image={linkImg} text={item} alt={"projects"} />
          ))}
        </div>
      </StyledProjects>

      <StyledFrameworks>
        <p>Frameworks</p>
        <div>
          {mockFrameworks.map((item, index) => (
            <ButtonFrameW
              key={index}
              background={item.background}
              frame={item.frame}
            />
          ))}
        </div>
      </StyledFrameworks>

      <StyledLanguages>
        <p>Languages</p>
        <div className="skills-languages">
          {mockLanguages.map((item, index) => (
            <div key={index}>
              <img src={item} alt="lang" />
            </div>
          ))}
        </div>
      </StyledLanguages>
    </>
  );
};

export default Skills;
