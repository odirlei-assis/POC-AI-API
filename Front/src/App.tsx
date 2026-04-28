import { useEffect } from 'react'
import { ProductList } from './components/ProductList'
import { ProductForm } from './components/ProductForm'
import type { Product } from './types'
import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [products, setProducts] = useLocalStorage<Product[]>('products-data', [])
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('app-theme', 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: crypto.randomUUID()
    }
    setProducts(prev => [product, ...prev])
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id))
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-title-container">
          <h1>Produtos</h1>
        </div>
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10h0A104.84,104.84,0,0,0,32,120a104,104,0,0,0,208,0h0A104.84,104.84,0,0,0,233.54,142.23Z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path></svg>
          )}
        </button>
      </header>

      <main className="content-grid">
        <aside>
          <ProductForm onAddProduct={handleAddProduct} />
        </aside>
        <section>
          <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
        </section>
      </main>
    </div>
  )
}

export default App
