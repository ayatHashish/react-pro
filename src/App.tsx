
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import ProductsList from './Components/ProductsList'
import Slider from './Components/Slider'
import About from './Components/ِAbout'
import Home from './Components/Home'
import ProductDetails from './Components/ProudactDetails'

function App() {

  return (
    <>
    
      <Navbar />
    

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
