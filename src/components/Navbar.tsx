import { NavLink } from 'react-router-dom';

import { Button, Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <BSNavbar className="bg-dark mb-3 text-white" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className="text-white">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="text-white">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="text-white">
            About
          </Nav.Link>
        </Nav>
        <Button variant="outline-light position-relative" onClick={openCart}>
          Cart
        </Button>
        {cartQuantity > 0 && (
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center postion-absolute text-white"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              bottom: '0',
              right: '0',
              transform: 'translate(-25%, -25%)',
            }}
          >
            {cartQuantity}
          </div>
        )}
      </Container>
    </BSNavbar>
  );
};
