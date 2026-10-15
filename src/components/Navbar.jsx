import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ favCount }) {
  return (
    <nav style={{ padding: '15px 30px', background: '#1e293b', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>ჩემი მაღაზია</div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>მთავარი</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>პროდუქტები</Link>
        <span style={{ background: '#2563eb', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
          ფავორიტები: {favCount}
        </span>
      </div>
    </nav>
  );
}