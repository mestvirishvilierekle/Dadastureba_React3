import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ item, isFav, onToggleFav }) {
  return (
    <div style={{ 
      border: '1px solid #e2e8f0', 
      borderRadius: '12px', 
      padding: '16px', 
      background: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      justify: 'space-between',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <div>
        <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
          <img src={item.image} alt={item.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
        </div>
        <h3 style={{ 
          fontSize: '15px', 
          fontWeight: '600',
          color: '#1e293b',
          margin: '0 0 10px 0', 
          lineHeight: '1.4',
          minHeight: '42px'
        }}>
          {item.title}
        </h3>
        <p style={{ fontWeight: 'bold', fontSize: '16px', color: '#2563eb', margin: '0 0 16px 0' }}>₾ {item.price}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
        <Link to={`/products/${item.id}`} style={{ padding: '8px 14px', background: '#f1f5f9', color: '#334155', borderRadius: '6px', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
          ნახვა
        </Link>
        <button 
          onClick={() => onToggleFav(item.id)}
          style={{ 
            padding: '8px 14px', 
            borderRadius: '6px', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '13px', 
            fontWeight: '500',
            background: isFav ? '#ef4444' : '#eff6ff', 
            color: isFav ? 'white' : '#2563eb',
            transition: 'all 0.2s'
          }}
        >
          {isFav ? 'ამოშლა' : 'ფავორიტებში'}
        </button>
      </div>
    </div>
  );
}