import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory category="men"/>}/>
    <Route path='/women' element={<ShopCategory category="women"/>}/>
    <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/products' element={<Products/>}>
        <Route path=':productId' element={<Products/>}/>
      </Route>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
