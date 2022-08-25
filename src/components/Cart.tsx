import { Offcanvas, Stack } from 'react-bootstrap';

import CartItem from './CartItem';
import { useShoppingCart } from '../hooks/useShoppingCart';

const Cart = ({ isOpen }: { isOpen: boolean }) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
