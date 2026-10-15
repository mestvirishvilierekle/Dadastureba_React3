import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductsPage({ favorites, onToggleFav }) {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div style={{ textAlign: 'center', padding: '40px' }}>იტვირთება...</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h2>პროდუქცია</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {productList.map((prod) => (
          <ProductCard 
            key={prod.id}
            item={prod}
            isFav={favorites.includes(prod.id)}
            onToggleFav={onToggleFav}
          />
        ))}
      </div>
    </div>
  );
}