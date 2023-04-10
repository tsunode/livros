import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Card = ({ id, image, name, author }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <img src={image} alt={name} />
        <span>{name}</span>
        <span>{author}</span>
      </Link>
    </Container>
  );
};
