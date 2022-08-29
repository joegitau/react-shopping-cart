import { useState } from 'react';
import Cart from '../components/Cart';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ShoppingCartContext } from '../hooks/useShoppingCart';

import { ICartItem, IShoppingCartProvider } from '../interfaces/ShoppingCart';

export const ShoppingCartProvider = ({ children }: IShoppingCartProvider) => {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>('shopping-cart', []);
  const [isOpen, setIsOpen] = useState(false);

  // dispatchers
  const getItemQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const incrementCartQty = (id: number) => {
    return setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);

      if (foundItem == null) {
        // item doesn't exist, as such add one
        return [...currItems, { id, quantity: 1 }];
      } else {
        // item exists, increment its quantity
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decrementCartQty = (id: number) => {
    return setCartItems((currItems) => {
      const foundItem = currItems.find((item) => item.id === id);

      if (foundItem?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    return setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  // cart
  const cartQuantity = cartItems.reduce((qty, item) => item.quantity + qty, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQty,
        incrementCartQty,
        decrementCartQty,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};
