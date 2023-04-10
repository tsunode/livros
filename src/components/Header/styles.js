import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--color-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 5px 25px;

  img {
    width: 75px;
    height: 75px;
  }

  form {
    width: 35%;
  }

`;
