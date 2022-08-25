import { Offcanvas, Stack } from 'react-bootstrap';

import CartItem from './CartItem';
import storeItems from '../data/items.json';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { formatCurrency } from '../utils/formatCurrency';

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
          <div className="border border-light text-black fs-5 ms-auto border-1 rounded py-2 px-1">
            Total:{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
