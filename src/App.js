import Home from "./pages/Home/Home";
import WishList from "./pages/WishList/WishList";
import {Routes,Route} from 'react-router-dom'
import GameDetail from './pages/GameDetail/GameDetail';
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import SignIn from "./pages/Sign-In/SignIn";
import Register from "./pages/Sign-In/Register";
import "./app.css"
function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

        </Routes>
   
      
    </div>
  );
}

export default App;
