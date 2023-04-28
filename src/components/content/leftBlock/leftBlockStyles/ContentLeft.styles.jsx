import styled from "styled-components";

export const StyledContentLeft = styled.div`
  background: #1a1c22;
  padding: 36px 24px 24px;
  background: #1a1c22;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-left__avatar {
    width: 100px;
    height: 100px;
  }
  h4 {
    margin-top: 24px;
    font-size: 20px;
    line-height: 120%;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
    line-height: 120%;
    color: #c1c1c4;
  }
`;
export const StyledChatButton = styled.li`
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px 8px;
  gap: 6px;
  height: 40px;
  border: 2px solid #46a11b;
  border-radius: 10px;
  width: 100%;
  img {
    width: 20px;
    height: 20px;
  }
`;
