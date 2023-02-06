import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../services/api";

import { Input } from "../../components/Input";

import { Button } from "../../styles/Button";
import { Main } from "./styles";
import { schema } from "./validator";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
      <h1>Cadastrar Livro</h1>

      <form onSubmit={handleSubmit(registerBook)}>
        <div>
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
          </div>
          <div>
            <Input
              id="licensor"
              type="text"
              label="Licenciador"
              error={errors.licensor?.message}
              {...register("licensor")}
            />
            <Input
              id="category"
              type="text"
              label="Categoria"
              error={errors.category?.message}
              {...register("category")}
            />
            <Input
              id="genre"
              type="text"
              label="Gênero"
              error={errors.genre?.message}
              {...register("genre")}
            />
            <Input
              id="art"
              type="text"
              label="Artista"
              error={errors.art?.message}
              {...register("art")}
            />
            <Input
              id="editor"
              type="text"
              label="Editor"
              error={errors.editor?.message}
              {...register("editor")}
            />
          </div>
        </div>

        <Button type="submit">Cadastrar</Button>
      </form>
    </Main>
  );
};
