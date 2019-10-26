import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
body {
  font-family: 'Open Sans Condensed';
  padding: 20px 60px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
  overflow: auto;
  ::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar
{
    width: 10px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.text};
}

.mode {
    position: fixed;
    float: right;
    right: 5vw;
    z-index: 2;
    top: 97vh;

    @media screen and (max-width: 800px) {
    right: 5.5vw;
    top: 97vh;
    font-size: 11px;
  }
}
`;
