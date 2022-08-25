import { Button, Stack } from 'react-bootstrap';

import storeItems from '../data/items.json';
import { ICartItem } from '../interfaces/ShoppingCart';
import { formatCurrency } from '../utils/formatCurrency';
import { useShoppingCart } from '../hooks/useShoppingCart';

const CartItem = ({ id, quantity }: ICartItem) => {
  const { cartQuantity, removeFromCart } = useShoppingCart();
  console.log(cartQuantity);

  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center border border-1 rounded py-2 px-1"
    >
      <img
        src={item?.imgUrl}
        style={{ height: '60px', width: '120px', objectFit: 'cover' }}
        className="rounded"
      />
      <div className="me-auto gap-2">
        <div>{item?.name}</div>
        <div className="h6 text-black-50">{formatCurrency(item?.price)}</div>
      </div>
      {quantity > 0 && (
        <div className="text-dark border border-warning rounded px-1 py-1">{quantity}</div>
      )}
      <div className="text-warning">{formatCurrency(quantity * item?.price)}</div>
      <Button
        variant="outline-danger rounded-circle"
        size="sm"
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
