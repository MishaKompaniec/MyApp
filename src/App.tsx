import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './CartContext';
import { Layout } from './components/layout';
import Routes from './router';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
