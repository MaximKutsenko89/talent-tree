import { css } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
    outline: none;
  }
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
  #root {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    padding: 0 10px;
    @media (max-width: 990px) {
      max-width: none;
    }
  }
`;
export default globalStyles;
