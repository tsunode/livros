import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Main } from "./styles";

export const Info = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await api.get(`books/${id}`);

      setBook(response.data);
    })();
  }, [id]);

  if (!book) {
    return <div>Carregando...</div>;
  }

  return (
    <Main>
      <h1>{book.name}</h1>
      <img src={book.cover} alt="" />

      <div>
        <div>
          <p>
            <strong>Publicado em:</strong> {book.published}
          </p>
          <p>
            <strong>Editora:</strong> {book.publishingCompany}
          </p>
          <p>
            <strong>Nº de páginas:</strong> {book.numberPages}
          </p>
        </div>
        <div>
          <p>
            <strong>Licenciador:</strong> {book.licensor}
          </p>
          <p>
            <strong>Categoria:</strong> {book.category}
          </p>
          <p>
            <strong>Gênero:</strong> {book.genre}
          </p>
          <p>
            <strong>Arte:</strong> {book.art}
          </p>
          <p>
            <strong>Editor:</strong> {book.editor}
          </p>
        </div>
      </div>
    </Main>
  );
};
