import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Contexts
import { CartProvider } from './Components/CartContext';

// Layouts
import MainLayout from './Layouts/MainLayout';

// Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Brands from './Pages/Brands';
import BrandDetails from './Pages/BrandDetails';
import Categories from './Pages/Categories';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'brands', element: <Brands /> },
      { path: 'brands/:id', element: <BrandDetails /> },
      { path: 'categories', element: <Categories /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}