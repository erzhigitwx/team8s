import React from "react";
import styled from "styled-components";
import cake from "../../../../public/assets/image/skills/Cake.png";
import star from "../../../../public/assets/image/skills/star.png";
import user from "../../../../public/assets/image/skills/user.png";
import mapPin from "../../../../public/assets/image/skills/MapPin.png";
import envelopeSimple from "../../../../public/assets/image/skills/EnvelopeSimple.png";

const StyledSkills = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;

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
