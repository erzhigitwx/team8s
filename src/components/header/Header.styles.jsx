import styled from "styled-components";
import { FlexRow } from "../../styles/styled";

export const StyledMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: start;
  gap: 4.5px;
  div {
    width: 12px;
    height: 1.5px;
    background: #5bd424;
  }
  div::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 1.5px;
    background: #5bd424;
    margin-top: -4.5px;
  }
  div::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 1.5px;
    background: #5bd424;
    margin-top: 4.5px;
  }
`;

export const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const StyledNavbar = styled(FlexRow)`
  gap: 16px;
  align-items: center;
`;
export const StyledBack = styled(FlexRow)`
  cursor: pointer;
  padding: 20px;
  gap: 6px;
  align-items: center;
  img {
    height: 20px;
    width: 20px;
  }
`;
export const StyledLogo = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 48px;
  span {
    color: #5bd424;
  }
`;
