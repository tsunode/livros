import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  min-height: 100vh;

  img {
    max-width: 275px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    font-size: 3rem;
  }
`;