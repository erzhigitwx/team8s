import React from "react";
import Button from "../../button/Button";
import { mockFrameworks, mockLanguages, mockProjects } from "./mockData";
import linkImg from "../../../../public/assets/image/links/external-link.svg";
import ButtonFrameW from "../../button/ButtonFrameW";
import {
  StyledFrameworks,
  StyledLanguages,
  StyledProjects,
} from "./rightBlockStyles/Knowledge.styles";

const Knowledge = () => {
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

export default Knowledge;
