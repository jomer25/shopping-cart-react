import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopContextProvider from './components/context/ShopContextProvider';
import Navbar from './components/Navbar';
import ShopPage from './pages/shop/ShopPage';
import CartPage from './pages/cart/CartPage';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route index element={<ShopPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
            </Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
