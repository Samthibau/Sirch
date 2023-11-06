import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/sirch_logo.png"
            alt="Sirc Logo"
            style={{ width: "60px", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Brand href="/" className="fw-bold">
          Sirch
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
      </Container>
    </Navbar>
  );
}
