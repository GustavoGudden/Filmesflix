import { Play, WarningCircle } from "phosphor-react";
import { Button, Container, H1, P } from "../../styles/style";
import { FaPlayCircle } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

function Banner() {
  return (
    <Container className="banner">
      <H1>Harry Potter</H1>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Iusto quos maiores rerum quidem veniam cumque ducimus
        repudiandae.
        <br /> Dolorem ex tempore
        <br /> voluptatem ducimus atque dolor, rerum eum commodi culpa
        repudiandae. Expedita.
      </P>

      <Container>
        <Button className="primary">
          <FaPlayCircle size={20} /> play
        </Button>
        <Button className="secondy">
          <BsInfoCircleFill size={20} />
          info
        </Button>
      </Container>
    </Container>
  );
}

export default Banner;
