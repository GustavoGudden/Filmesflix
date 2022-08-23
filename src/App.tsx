import { Play, WarningCircle } from "phosphor-react";
import Banner from "./componentes/main/Banner";
import FooterComp from "./componentes/footer/Footer";
import HeaderComp from "./componentes/header/Header";

import "./global.css";
import { Button, Container } from "./styles/style";
import Filmes from "./componentes/main/filmes";

function App() {
  return (
    <main>
      <HeaderComp />
      <Banner></Banner>
      <Container className="center">
        <h1>editoras</h1>
      </Container>
      <Filmes></Filmes>
      <FooterComp />
    </main>
  );
}

export default App;
