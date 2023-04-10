import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "../../services/api";

import { Input } from "../../components/Input";

import { Button } from "../../styles/Button";
import { Main } from "./styles";
import { schema } from "./validator";
import { Header } from "../../components/Header";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const registerBook = async (data) => {
    try {
      const response = await api.post("/books", data);
      const id = response.data.id;

      navigate(`/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Main>
      <Header />

      <section>
        <h1>Cadastrar Livro</h1>

        <form onSubmit={handleSubmit(registerBook)}>
          <div>
            <Input
              id="name"
              type="text"
              label="Nome"
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              id="cover"
              type="text"
              label="Capa"
              error={errors.cover?.message}
              {...register("cover")}
            />
            <Input
              id="published"
              type="text"
              label="Publicado em"
              error={errors.published?.message}
              {...register("published")}
            />
            <Input
              id="publishingCompany"
              type="text"
              label="Editora"
              error={errors.publishingCompany?.message}
              {...register("publishingCompany")}
            />
            <Input
              id="numberPages"
              type="text"
              label="Nº de páginas"
              error={errors.numberPages?.message}
              {...register("numberPages")}
            />

            <Input
              id="author"
              type="text"
              label="Autor"
              error={errors.author?.message}
              {...register("author")}
            />
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </section>
    </Main>
  );
};
