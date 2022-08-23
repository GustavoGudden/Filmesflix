import { Container, Footer } from "../../styles/style";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

function FooterComp() {
  return (
    <Footer>
      <Container>
        <h1>Gustavo Gudden</h1>
      </Container>
      <Container>
        <p>esse site esta em desenvolvimento</p>
      </Container>
      <Container>
        <FacebookLogo size={50} />
        <InstagramLogo size={50} />
        <LinkedinLogo size={50} />
      </Container>
    </Footer>
  );
}

export default FooterComp;
