import { createContext, useContext, useState } from 'react';

import { ICartItem, IShoppingCartContext, IShoppingCartProvider } from '../interfaces/ShoppingCart';

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: IShoppingCartProvider) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  // reducers
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
    return;
  };

  const removeFromCart = (id: number) => {
    return;
  };

  return (
    <ShoppingCartContext.Provider value={{ getItemQty, incrementCartQty, decrementCartQty, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
