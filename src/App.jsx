import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

export default function App() {
  const [favIds, setFavIds] = useLocalStorage('user_favs', []);

  const handleToggleFav = (id) => {
    if (favIds.includes(id)) {
      setFavIds(favIds.filter((item) => item !== id));
    } else {
      setFavIds([...favIds, id]);
    }
  };

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'sans-serif' }}>
        <Navbar favCount={favIds.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/products" 
            element={<ProductsPage favorites={favIds} onToggleFav={handleToggleFav} />} 
          />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}