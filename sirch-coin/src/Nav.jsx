import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Sirch Coin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link href="/coin/send" eventKey="link-1">
                Send Sirch Coin
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/coin/balance" eventKey="link-2">
                Check Coin Balance
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
