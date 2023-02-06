import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--color-white);
    font-weight: bold;
  }

  input {
    background-color: var(--color-transparent);
    border: none;
    border-radius: 8px;
    padding: 2px;
    color: var(--color-white);
  }

  p {
    color: var(--color-error);
    font-size: 1.4rem;
    
    margin-top: -6px;
    margin-bottom: 6px;
  }
`;
