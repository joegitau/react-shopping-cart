import { createContext, useContext } from 'react';
import { IShoppingCartContext } from '../interfaces/ShoppingCart';

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
