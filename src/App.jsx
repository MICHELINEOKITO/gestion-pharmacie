import React from "react";
import{ BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About"
import Products from "./pages/Products";
import ProductsList from "./pages/ProductsList";
import SingleProduct from "./pages/SingleProduct";
import NavBar from "./components/NavBar";

function App(){
  return(
    <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductsList/>} /> 
              <Route path=":id" element={<SingleProduct/>} /> 
              
              </Route>
            
        </Routes>
    </BrowserRouter>
      
    
  
  )
}
export default App;