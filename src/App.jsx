import React from "react";
import{ BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Products from "./pages/Products";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/SingleProduct";
import NavBar from "./components/NavBar";

function App(){
  return(
    <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductsList/>} /> 
              <Route path="id" element={<SingleProduct/>} /> 
              
              </Route>
            
        </Routes>
    </BrowserRouter>
      
    
  
  )
}
export default App;