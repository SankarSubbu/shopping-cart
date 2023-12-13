import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { useState } from 'react';

const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Apple iPhone 15 Pro Max (256 GB)",
    description: 'FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.',
    price: 10,
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg',
    title: 'Apple 2022 MacBook Pro Laptop with M2 chip',
    description: 'SUPERCHARGED BY M2 – The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory.',
    price: 20,
  },

  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg',
    title: 'Motivational Poster Frame',
    description: 'For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More',
    price: 20,
  },
]

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems([
        ...cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      ]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (product) => {
    setCartItems([
      ...cartItems.filter((item) => item.id !== product.id),
    ]);
  };

  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6">
            <ProductCard
              product={product}
              onAddToCart={addToCart}
            />
          </div>
        ))}
      </div>
      <hr />
      <Cart items={cartItems} onRemoveItem={removeItem} />
    </div>
    
  );
}

export default App;