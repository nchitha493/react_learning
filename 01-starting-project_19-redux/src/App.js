import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from'react-redux';
const dumpProducts =[{ id:1,title: 'Test Item', price: 6 }]
function App() {
  const cartIsVisible = useSelector((state) =>  state.ui.cartIsVisible)
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products products={dumpProducts} />
    </Layout>
  );
}

export default App;
