import { Container, Nav, Navbar } from "react-bootstrap"

function NavbarComponent() {
  return (
    <>
      <Navbar className="bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.wayfairnext.com/decorify/_next/image?url=%2Fdecorify%2Fimages%2Fwf_next_beta.png&w=64&q=75"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="font-bold text-2xl">Decorify</span>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end pl-10 font-medium text-lg">
            <Navbar.Text>
              <span>My Designs</span>
            </Navbar.Text>
            <Navbar.Text className="pl-12">
              <span>My Favorites</span>
            </Navbar.Text>
            <Navbar.Text className="pl-12">
              <span>Help</span>
            </Navbar.Text>
            <Navbar.Text className="pl-12">
              <span>Sign Out (jl737p@wayfair.com)</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
