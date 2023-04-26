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
          {mockProjects.map((item) => (
            <Button
              image={linkImg}
              text={item.name}
              alt={"projects"}
              key={item.id}
            />
          ))}
        </div>
      </StyledProjects>

      <StyledFrameworks>
        <p>Frameworks</p>
        <div>
          {mockFrameworks.map((item) => (
            <ButtonFrameW
              background={item.background}
              frame={item.frame}
              key={item.id}
            />
          ))}
        </div>
      </StyledFrameworks>

      <StyledLanguages>
        <p>Languages</p>
        <div className="skills-languages">
          {mockLanguages.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt="lang" />
            </div>
          ))}
        </div>
      </StyledLanguages>
    </>
  );
};

export default Skills;
