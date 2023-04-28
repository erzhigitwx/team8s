import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100%;
  width: 100%;
  font-family: 'Noir Pro';
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
  background: #26292B;
}
.App{
  padding: 48px 56px 64px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
`;
