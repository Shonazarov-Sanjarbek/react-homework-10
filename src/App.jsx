import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Wishlist from "@/pages/wishlist/Wishlist"
import Login from "@/pages/login/Login"

function App() {
  return (
    <>  
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App