import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Outlet, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Card } from "../../components/Card";
import { ArrowContainer, CardsContainer, Main } from "./styles";
import { Link } from "../../styles/Button";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get("/books");

      setBooks(response.data);
    })();
  }, []);

  const renderBooks = books.map((book) => (
    <Card
      key={book.id}
      id={book.id}
      image={book.cover}
      name={book.name}
      art={book.art}
    />
  ));

  return (
    <Main>
      <header>
        <Link to='/register'>Cadastrar Livro</Link>
      </header>

      {id ? (
        <Outlet />
      ) : (
        <>
          <h1>Selecione um livro abaixo</h1>
          <ArrowContainer>
            <SlArrowDown size={80} />
            <SlArrowDown size={80} />
            <SlArrowDown size={80} />
          </ArrowContainer>
        </>
      )}

      <CardsContainer>{renderBooks}</CardsContainer>
    </Main>
  );
};
