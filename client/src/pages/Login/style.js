import { css } from "@emotion/react";

export const pageStyle = css`
  width: 100%;
  height: 100vh;
  .MuiPaper-root {
    width: 450px;
    border-radius: 5px;
    max-width: 35vw;
    padding: 30px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: grid;
    gap: 10px;
  }
`;
