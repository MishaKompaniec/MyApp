import React from 'react';

import { Button } from 'antd';

import { Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Button type='primary'>Нажми меня</Button>
      <Footer />
    </>
  );
}

export default App;
