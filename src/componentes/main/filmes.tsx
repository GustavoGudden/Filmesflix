import { Container, H1, Img } from "../../styles/style";

function Filmes() {
  return (
    <Container className="main">
      <Container className="center">
        <Container className="editora">
          <Img src="https://i.ibb.co/51kDW1Y/transferir.jpg" />
        </Container>
        <Container className="editora">
          <Img
            src="https://i.ibb.co/YZrF2DQ/transferir-1.jpg"
            alt="transferir-1"
          />
        </Container>
        <Container className="editora">
          <Img
            src="https://i.ibb.co/zxPcMxt/editora-abril-1-1.png"
            alt="editora-abril-1-1"
          />
        </Container>
        <Container className="editora">
          <Img src="https://i.ibb.co/yFcbf4z/15-1.png" alt="15-1" />
        </Container>
      </Container>
      <H1>top 10</H1>
      <Container className="center">
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
      </Container>

      <H1>açao</H1>
      <Container className="center">
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
        <Container className="filme">
          <Img src="https://i.ibb.co/7zByJL7/D-NQ-NP-646877-MLB32140972609-092019-O.jpg" />
        </Container>
      </Container>
    </Container>
  );
}

export default Filmes;
