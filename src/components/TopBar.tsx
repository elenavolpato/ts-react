import { Container, /* Nav, */ Navbar } from "react-bootstrap"

const TopBar = () => {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="bg-dark mb-4"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="src/assets/icons8-planet-32.png"
            alt="planet icon"
          />
          &nbsp;Space News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopBar
