import Home from "./pages/Home/Home";
import WishList from "./pages/WishList/WishList";
import {Routes,Route} from 'react-router-dom'
import "./app.css"
function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<WishList />} />
        </Routes>
   
      
    </div>
  );
}

export default App;
