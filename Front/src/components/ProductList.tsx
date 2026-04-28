import React from 'react';
import type { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onDeleteProduct }) => {
  if (products.length === 0) {
    return (
      <div className="glass-panel empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <p>Ainda não há produtos cadastrados.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Os produtos que você adicionar aparecerão aqui.</p>
      </div>
    );
  }

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <div key={product.id} className="glass-panel product-card animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
          <div className="product-header">
            <div>
              <h3 className="product-title">{product.name}</h3>
              <span className="product-price">{formatPrice(product.price)}</span>
            </div>
            <button 
              className="icon-btn danger" 
              onClick={() => onDeleteProduct(product.id)}
              aria-label="Excluir produto"
              title="Excluir produto"
              style={{ padding: '0.4rem', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
            </button>
          </div>
          <p className="product-desc">{product.description}</p>
        </div>
      ))}
    </div>
  );
};
