import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components/layout';
import { BasketProvider } from './context/basketContext';
import Routes from './router';

function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
