import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartQty  , openCart} = useCartContext();
  return (
    <NavbarBs className="bg-dark text-light mb-3 mt-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/home" as={NavLink} className="text-light">
            Home
          </Nav.Link>

          <Nav.Link to="/" as={NavLink} className="text-light">
            Shop
          </Nav.Link>

          <Nav.Link to="/about" as={NavLink} className="text-light">
            About
          </Nav.Link>
        </Nav>

        <Button
          variant="outline-light"
          onClick={openCart}
          style={{
            width: "3rem",
            height: "3rem",
            fontSize: "1.2rem",
            position: "relative",
          }}
        >
          <i className="bi bi-cart"></i>
          <div
            className="rounded-circle bg-secondary d-flex  justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              fontSize: "1rem",
              bottom: 0,
              right: 0,
              padding: "10px",
              transform: "translate(25% , 25%)",
            }}
          >
            {cartQty}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
