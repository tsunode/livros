import { Link as LinkRouter } from "react-router-dom";
import styled, { css } from "styled-components";

const defaultCssButton = css`
  background-color: var(--color-white);
  border-radius: 15px;

  padding: 9px;

  text-align: center;
  color: var(--color-primary);
`;

export const Button = styled.button`
  ${defaultCssButton}

  border: none;
`;

export const Link = styled(LinkRouter)`
  ${defaultCssButton}

  display: block;
  text-decoration: none;
`;
