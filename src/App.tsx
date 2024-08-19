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

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
      setSearchQuery(query);
  };

  return (
    <>
      <CartProvider>
      <Navbar onCategoryChange={handleCategoryChange} searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <MainData selectedCategory={selectedCategory} searchQuery={searchQuery} />
      </CartProvider>
    </>
  )
}

export default App
