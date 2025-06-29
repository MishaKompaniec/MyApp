import React, { createContext, useContext, useState } from 'react';

import { BasketContextType, BasketItem } from '../types';

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBaskett] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const addToBasket = (item: BasketItem) => {
    setBaskett((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromBasket = (id: string) => {
    setBaskett((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setBaskett((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };

  const clearBasket = () => setBaskett([]);

  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const openBasket = () => setIsBasketOpen(true);
  const closeBasket = () => setIsBasketOpen(false);
  const toggleBasket = () => setIsBasketOpen((prev) => !prev);

  return (
    <BasketContext.Provider
      value={{
        basket,
        totalPrice,
        isBasketOpen,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        openBasket,
        closeBasket,
        toggleBasket,
        clearBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
