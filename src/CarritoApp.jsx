import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ComprasPage } from './pages/ComprasPage';
import { CarritoPage } from './pages/CarritoPage';
import { ProductosProvider } from './context/ProductosProvider';

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<ComprasPage />} />
          <Route path='/carrito' element={<CarritoPage />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ProductosProvider>
  );
};
