import { ReactNode } from 'react';

export interface IShoppingCartProvider {
  children: ReactNode;
}

export interface IShoppingCartContext {
  getItemQty: (id: number) => number;
  incrementCartQty: (id: number) => void;
  decrementCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export interface ICartItem {
  id: number;
  quantity: number;
}
