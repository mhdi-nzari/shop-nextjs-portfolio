import { ReactNode, createContext, useState, useContext } from "react";
import Cart from "../components/Cart";

type CartProviderProps = {
  children: ReactNode;
};

import { useLocalStorage } from "../hooks/useLocalStorage";

type CartContext = {
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartQty: number;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
};

type CartItem = {
  id: number;
  qty: number;
};

const CartContext = createContext({} as CartContext);

export function useCartContext() {
  return useContext(CartContext);
}

// initail Cart Context && Maybe Provider
export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopingCart",
    []
  );

  const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  // calculate value qty
  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  }

  function addItem(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, qty: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  }

  //   decrease item

  function decreaseItem(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.qty == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <CartContext.Provider
      value={{
        getItemQty,
        addItem,
        decreaseItem,
        removeItem,
        cartItems,
        cartQty,
        openCart,
        closeCart,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
