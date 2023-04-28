import React from "react";
import cake from "../../../../public/assets/image/skills/Cake.svg";
import star from "../../../../public/assets/image/skills/star.svg";
import user from "../../../../public/assets/image/skills/user.svg";
import mapPin from "../../../../public/assets/image/skills/MapPin.svg";
import envelopeSimple from "../../../../public/assets/image/skills/envelope.svg";
import { StyledSkills } from "./leftBlockStyles/Skills.styles";

const Skills = ({ post, exp, country, age, email }) => {
  return (
    <StyledSkills>
      <div>
        <img src={user} alt="user" /> <p>{post}</p>
      </div>
      <div>
        <img src={star} alt="star" /> <p>{exp}</p>
      </div>
      <div>
        <img src={mapPin} alt="map" /> <p>{country}</p>
      </div>
      <div>
        <img src={cake} alt="cake" /> <p>{age}</p>
      </div>
      <div>
        <img src={envelopeSimple} alt="email" /> <p>{email}</p>
      </div>
    </StyledSkills>
  );
};

export default Skills;
