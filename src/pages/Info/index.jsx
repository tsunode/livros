import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
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
      <Header hasRegisterLink />

      <section>
        <div>
          <img src={book.cover} alt="" />
          <div>
            <h1>{book.name}</h1>
            <p>
              <strong>Publicado em:</strong> {book.published}
            </p>
            <p>
              <strong>Editora:</strong> {book.publishingCompany}
            </p>
            <p>
              <strong>Nº de páginas:</strong> {book.numberPages}
            </p>
            <p>
              <strong>Editor:</strong> {book.editor}
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};
