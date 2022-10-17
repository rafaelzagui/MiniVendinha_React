import React, { useState, useEffect } from 'react'

import { BrowserRouter , Router, Routes, Route } from 'react-router-dom'

import { commerce } from './lib/commerce';

import Home from './Pages/Home'
import Contato from './Pages/Contato'
import Empresa from './Pages/Company'

import Container from './components/Container/Container'
import Carrinho from './Pages/Carrinho'
import ProductPage from './Pages/ProductPage'
import NavBar from './components/Template/NavBar'
import Footer from './components/Template/Footer'
import Produtos from './Pages/pg_Produtos'
import Login from './Pages/Login'
import { CartProvider } from 'react-use-cart'
import Teste from './Pages/Teste';
function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

 
  useEffect(() => {
    fetchProducts();
    // fetchCart();
  }, []);

  return (
    <div className='App mw-100 m'>
      <CartProvider>
      <BrowserRouter>
        
      <NavBar />
          <Routes>
            <Route path="/" element={<Home produto={products}></Home>}></Route>
            <Route path="/Produtos" element={<Produtos products={products}></Produtos>}></Route>
            <Route path="/Contato" element={<Contato></Contato>}></Route>
            <Route path="/Company" element={<Empresa></Empresa>}></Route>
            <Route path="/Carrinho" element={<Carrinho> </Carrinho>}></Route>
            <Route path ="/cadastro-login/:props" element = {<Login></Login>}></Route>
            <Route path ="/teste" element={<Teste></Teste>}></Route>

            <Route path='/Produtos/:id' element={<ProductPage props= {products} />}></Route>
          </Routes>
          
          <Container customClass="min-height">
          
          </Container>
          <Footer />
        </BrowserRouter>
      </CartProvider>

    </div>

  );
}

export default App;
