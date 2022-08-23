import React from "react";
import { A, Container, Header } from "../../styles/style";

function HeaderComp() {
  return (
    <Header>
      <h1>livroflix</h1>
      <Container>
        <A> Incio</A>
        <A> Filmes</A>
        <A> Series</A>
        <A> Meus Livros</A>
      </Container>
    </Header>
  );
}

export default HeaderComp;
