import styled, { css, keyframes } from "styled-components";

export const Main = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  header {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    padding: 0 20px;
  }
`;

export const CardsContainer = styled.ul`
  display: flex;
  gap: 42px;
  justify-content: center;
`;

const arrowAnimation = (item, itemBefore) => keyframes`
  0% {
    opacity: 0;
  }
  ${itemBefore} {
    opacity: 0;
  }
  ${item} {
    opacity: 1;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    margin-top: -34px;

    filter: drop-shadow(1px 1px 5px rgb(255, 255, 255));
    stroke: var(--color-white);
    stroke-width: 6px;

    ${[10, 40, 80].map(
      (item, index) =>
        css`
          &:nth-child(${index + 1}) {
            animation: ${arrowAnimation(`${item}%`, `${item - 10}%`)} 600ms
              infinite;
          }
        `
    )}
  }
`;
