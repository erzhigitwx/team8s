import styled from "styled-components";

export const StyledLinks = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
  }
  &:hover img:not(:hover) {
    opacity: 0.3;
  }
`;
