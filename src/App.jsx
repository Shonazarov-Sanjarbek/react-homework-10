import Home from "./pages/home/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import Wishlist from "@/pages/wishlist/Wishlist"
import Login from "@/pages/login/Login"
import Layout from "./pages/Layout/Layout"
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        {/* <Route path="/" element={<Navigate replace to={"/login"}/>}/> */}
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App