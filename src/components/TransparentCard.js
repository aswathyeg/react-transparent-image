import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import second from "./assets/second.png";
import furniture from "./assets/furniture.png";
import plant from "./assets/plant.png";
import man from "./assets/man.avif";
function NavTabsExample() {
  return (
    <Container>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Know More</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          <h2></h2>
        </Card.Header>
        <Card.Body>
          <div className="image-container">
            <img src={man} className="image" alt="transparentImage" />

            {/* <Card /> */}
            <p className="overlay-text">Fly with your own wings</p>
          </div>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NavTabsExample;
