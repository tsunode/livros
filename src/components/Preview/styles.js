import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 80px;
  width: 100%;

  img {
    max-height: 300px;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
  }

  p {
    font-size: 3rem;
  }
`;
