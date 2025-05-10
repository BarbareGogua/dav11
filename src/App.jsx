import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import './index.css';

function App() {
  return (
    <BrowserRouter> 
      <div className="app-container"> {}
        <header className="app-header">
          <div className="header-content">
            <Link to="/" className="logo-link">DummyJSON Shop</Link>
          </div>
        </header>

        <main>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </ProductProvider>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} DummyJSON Shop - შექმნილია React-ის გამოყენებით</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
