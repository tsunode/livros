import { useForm } from "react-hook-form";
import logo from "../../assets/logo.svg";

import { Link } from "../../styles/Button";
import { Input } from "../Input";
import { Container } from "./styles";

export const Header = ({ hasSearchInput = false, hasRegisterLink = false }) => {
  const { register } = useForm();

  return (
    <Container>
      <img src={logo} alt="" />
      {!!hasSearchInput && (
        <form>
          <Input placeholder="search" {...register("search")} />
        </form>
      )}
      {!!hasRegisterLink && <Link to="/register">Cadastrar Livro</Link>}
    </Container>
  );
};
