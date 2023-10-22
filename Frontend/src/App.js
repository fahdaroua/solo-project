import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState } from 'react'
import CartList from './components/CartList';
import ProductDetails from './components/ProductDetails';
const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const[Genre,setGenre] = useState("")
const [productName,setProductName] = useState("")
const [productDetails,setProductDetails] = useState({})
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x,y) => {
  setView(x)
  setProductDetails(y)
}
const handleChange = (x) => {
  setProductName(x)
}

  return (
    <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>switchView ("productList")}>Movie Ranking</span>
          { view ==="productList" &&<Search handleChange={handleChange}/>}
        { view ==="productList" && <span className="items" onClick={ ()=> {
toggleMenu ();
setGenre("")
        }
          
          }>
         
          
          </span>}
         
        </div>
      
          {view ==="productList" && <ProductsList Genre = {Genre} productName = {productName} switchView = {switchView} />}
          {view ==="cart"&&<CartList/>}   
          {view ==="details"&&<ProductDetails  productDetails ={productDetails}/>}   
    </div>
  );
}

export default App;
