import { css } from "@emotion/react";

export const cardsWrapperStyle = css`
  display: grid;
  gap: 20px;
  width: calc(100% - 440px);
  .MuiPaper-root {
    height: fit-content;
  }
`;
export const pageViewStyle = css`
  display: flex;
  width: 100%;
  padding: 40px;
  gap: 50px;
  .search-bar {
    width: 300px;
    .search-wrapper {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
  }
`;

