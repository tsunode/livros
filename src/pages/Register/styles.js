import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  form > div {
    display: flex;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
