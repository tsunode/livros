import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Outlet, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Card } from "../../components/Card";
import { ArrowContainer, CardsContainer, Main } from "./styles";
import { Header } from "../../components/Header";

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
      author={book.author}
    />
  ));

  return (
    <Main>
      <Header hasRegisterLink hasSearchInput />

      <div className="container">
        {id ? (
          <Outlet />
        ) : (
          <>
            <h1>Selecione um livro abaixo</h1>
          </>
        )}

        <CardsContainer>{renderBooks}</CardsContainer>
      </div>
    </Main>
  );
};
