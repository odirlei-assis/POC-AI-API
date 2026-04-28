import React, { useState } from 'react';
import type { Product } from '../types';
import { checkContentSafety } from '../services/contentSafety';

interface ProductFormProps {
  onAddProduct: (product: Omit<Product, 'id'>) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    
    if (!name.trim() || !description.trim() || !price) {
      return;
    }
    
    const parsedPrice = parseFloat(price.replace(',', '.'));
    if (isNaN(parsedPrice) || parsedPrice <= 0) return;

    setIsSubmitting(true);

    try {
      const { isSafe, reason } = await checkContentSafety(name, description);
      
      if (!isSafe) {
        setErrorMsg(reason || "Conteúdo não aprovado pelas diretrizes.");
        setIsSubmitting(false);
        return;
      }

      onAddProduct({
        name: name.trim(),
        description: description.trim(),
        price: parsedPrice
      });

      // Limpar form se for sucesso
      setName('');
      setDescription('');
      setPrice('');
    } catch(err) {
       console.error(err);
       setErrorMsg("Erro inesperado. Tente novamente.");
    } finally {
       setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel">
      <h2>Cadastro</h2>
      {errorMsg && (
        <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid #fca5a5' }}>
          <strong>Atenção:</strong> {errorMsg}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            required
          />
          <label htmlFor="name">Nome do Produto</label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="price"
            placeholder=" "
            step="0.01"
            min="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={isSubmitting}
            required
          />
          <label htmlFor="price">Valor (R$)</label>
        </div>

        <div className="form-group">
          <textarea
            id="description"
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
            required
          />
          <label htmlFor="description">Descrição</label>
        </div>

        <button type="submit" className="primary" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg className="animate-spin" style={{ animation: "spin 1s linear infinite", width: '1rem', height: '1rem', marginRight: '0.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analisando...
            </>
          ) : 'Cadastrar Produto'}
        </button>
      </form>
    </div>
  );
};
