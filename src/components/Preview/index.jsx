import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Link } from "../../styles/Button";
import { Section } from "./styles";

export const Preview = () => {
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
    <Section>
      <img src={book.cover} alt={book.name} />
      <aside>
        <h1>{book.name}</h1>

        <div>
          <p><strong>Publicado em:</strong> {book.published}</p>
          <p><strong>Editora:</strong> {book.publishingCompany}</p>
          <p><strong>Nº de páginas:</strong> {book.numberPages}</p>
        </div>

        <Link to={`/info/${id}`}>Mais infos</Link>
      </aside>
    </Section>
  );
};
