import { forwardRef } from "react";
import { Container } from "./styles";

export const Input = forwardRef(({ id, label, type, error, ...rest }, ref) => {
  return (
    <Container>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input type={type} id={id} ref={ref} {...rest} />
      {error ? <p>{error}</p> : null}
    </Container>
  );
});
