import './App.css'
import React, { useState } from 'react';
import { Navbar } from './Pages/Navbar'
import { MainData } from './Products/MainData'
import { CartProvider } from './Cart-Context/Cart';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
  };

  return (
    <>
      <CartProvider>
      <Navbar onCategoryChange={handleCategoryChange} />
      <MainData selectedCategory={selectedCategory} />
      </CartProvider>
    </>
  )
}

export default App
