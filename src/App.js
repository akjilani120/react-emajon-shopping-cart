
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login';
import SignUp from './Components/SingUp/SignUp';
function App() {
  return (
     <div>
     <Header></Header>   
     <Routes>
       <Route path='/' element={<Products></Products>}></Route>
       <Route path='/home' element={<Products></Products>}></Route>
       <Route path='/about' element={<About></About>}></Route>
      <Route path='/order' element={<Order></Order>} ></Route>
      <Route path='/inventory' element={<Inventory></Inventory>} ></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route  path='/signUp' element={<SignUp></SignUp>}></Route>
     </Routes>

    </div>
  );
}

export default App;
