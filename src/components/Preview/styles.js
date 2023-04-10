import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  /* justify-content: center; */
  align-self: center;
  width: calc(100% - 60px);
  background-color: var(--color-transparent);
  border-radius: 5px;

  img {
    background-color: var(--color-primary);
    padding: 15px 60px;
    max-height: 400px;
    border-radius: 5px 15px 15px 5px;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 15px 30px;

    
    h1 {
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
    }
  }

  p {
    font-size: 4rem;
  }

  a {
    width: fit-content;
   align-self: flex-end;
  }
`;
