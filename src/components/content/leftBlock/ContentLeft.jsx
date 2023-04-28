import React from "react";
import premiumUser from "../../../../public/assets/image/PremiumUser.svg";
import chatCircleDots from "../../../../public/assets/image/chatCircleDots.svg";
import Skills from "./Skills";
import Links from "./Links";
import {
  StyledChatButton,
  StyledContentLeft,
} from "./leftBlockStyles/ContentLeft.styles";

const ContentLeft = () => {
  return (
    <StyledContentLeft>
      <img src={premiumUser} alt="premium" className="content-left__avatar" />
      <h4>Nikita Maksimov</h4>
      <p>@StasyRivieraX</p>
      <StyledChatButton>
        Message <img src={chatCircleDots} alt="chat icon" />
      </StyledChatButton>
      <Skills
        post={"Front-end Developer"}
        exp={"3-5 years of experience"}
        country={"Ukraine"}
        age={"25 years old"}
        email={"nikita888@gmail.com"}
      />
      <Links />
    </StyledContentLeft>
  );
};

export default ContentLeft;
