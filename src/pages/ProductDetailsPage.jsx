import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', padding: '40px' }}>იტვირთება...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}>← უკან</button>
      <div style={{ display: 'flex', gap: '20px', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '8px', background: 'white' }}>
        <img src={singleProduct.image} alt={singleProduct.title} style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
        <div>
          <h2>{singleProduct.title}</h2>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2563eb' }}>₾ {singleProduct.price}</p>
          <p style={{ color: '#475569' }}>{singleProduct.description}</p>
        </div>
      </div>
    </div>
  );
}