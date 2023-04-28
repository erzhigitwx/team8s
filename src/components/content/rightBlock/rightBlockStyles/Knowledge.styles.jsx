import styled from "styled-components";

export const StyledProjects = styled.div`
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
export const StyledFrameworks = styled.div`
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
export const StyledLanguages = styled.div`
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