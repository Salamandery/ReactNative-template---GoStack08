import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  // AsyncStorage.clear();
  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE
      const storegedProduct = await AsyncStorage.getItem(
        '@gomarketplace:produtos',
      );

      if (storegedProduct) {
        setProducts(JSON.parse(storegedProduct));
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      // TODO ADD A NEW ITEM TO THE CART
      const Exists = products.find(item => item.id === product.id);

      if (!Exists) {
        const newItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image_url: product.image_url,
          quantity: 1,
        };
        setProducts([...products, newItem]);
      } else {
        products.map(item => {
          if (item.id === Exists.id) item.quantity += 1;
        });
      }

      await AsyncStorage.setItem(
        '@gomarketplace:produtos',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      const newProducts = products.map(product => {
        if (product.id === id) {
          product.quantity += 1;
        }
        return product;
      });

      setProducts(newProducts);

      await AsyncStorage.setItem(
        '@gomarketplace:produtos',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      const newProducts = products.map(product => {
        if (product.quantity >= 0 && product.id === id) {
          product.quantity -= 1;
        }
        return product;
      });

      setProducts(newProducts);

      await AsyncStorage.setItem(
        '@gomarketplace:produtos',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
