import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components/layout';
import Routes from './router';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
