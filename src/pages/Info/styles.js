import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  > section {
    display: flex;
    height: calc(100vh - 85px);
    width: 100%;
    justify-content: center;
    align-items: center;

    > div {
      margin: 60px;
      width: 100%;
      justify-content: space-between;
      background-color: var(--color-transparent);
      display: flex;
      flex-direction: row-reverse;
      border-radius: 30px;
    }

    div > img {
      max-height: 500px;
      padding: 30px 60px;
    }

    > div div {
      background-color: var(--color-primary);
      border-radius: 30px 0px 360px 30px;
      display: flex;
      flex-direction: column;
      /* align-items: center; */

      padding: 60px;
      padding-top: 20px;

      width: 60%;
    }

    h1 {
      margin-bottom: 40px;
    }

    p {
      text-align: left;
      font-size: 2.5rem;
      margin: 2px;
    }
  }
`;
