import styled from "styled-components";

export const StyledSkills = styled.div`
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
