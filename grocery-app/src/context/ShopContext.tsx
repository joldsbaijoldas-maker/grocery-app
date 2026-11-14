
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import { Product } from '../components/data';

type ShopContextType = {
  cart: Product[];
  favorites: Product[];

  userName: string;
  userEmail: string;

  setUser: (name: string, email: string) => void;

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  toggleFavorite: (product: Product) => void;
  clearCart: () => void;
  isFavorite: (id: number) => boolean;
};

const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

export function ShopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // Қолданушы мәліметтерін сақтау
  const setUser = (name: string, email: string) => {
    setUserName(name);
    setUserEmail(email);
  };

  const addToCart = (product: Product) => {
    setCart(current => [...current, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(current => {
      const index = current.findIndex(
        item => item.id === id
      );

      if (index === -1) return current;

      return current.filter((_, i) => i !== index);
    });
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(current =>
      current.some(item => item.id === product.id)
        ? current.filter(item => item.id !== product.id)
        : [...current, product]
    );
  };

  const isFavorite = (id: number) =>
    favorites.some(item => item.id === id);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        favorites,
        userName,
        userEmail,
        setUser,
        addToCart,
        removeFromCart,
        toggleFavorite,
        clearCart,
        isFavorite,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      'useShop ShopProvider ішінде қолданылуы керек'
    );
  }

  return context;
}
