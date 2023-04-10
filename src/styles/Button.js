import { Link as LinkRouter } from "react-router-dom";
import styled, { css } from "styled-components";

const defaultCssButton = css`
  background-color: var(--color-secondary);
  border-radius: 20px;

  padding: 8px 20px;

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
