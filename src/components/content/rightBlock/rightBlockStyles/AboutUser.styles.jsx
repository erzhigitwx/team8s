import styled from "styled-components";
import { FlexRow } from "../../../../styles/styled";

export const StyledAbout = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .right-content__about-des {
    font-size: 14px;
    line-height: 120%;
  }
`;
export const StyledSearchTeam = styled(FlexRow)`
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;
