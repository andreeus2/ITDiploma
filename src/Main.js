import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { ShopContextProvider } from './Context/Shop-Context';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Admin from './Root/Admi';
import HomePage from './Pages/Home';
import PaymentForm from './Components/Payment/PaymentForm';


const Main=() =>{


    return (
    <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/cart"  element={<Cart />}/>
          <Route path="/admin"  element={<Admin />}/>
          <Route path="/Products"  element={<Shop />}/>
          <Route path="/Checkout"  element={<PaymentForm />}/>
        </Routes>
      </Router>
    </ShopContextProvider>
    )
}

export default Main