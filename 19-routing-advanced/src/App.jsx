import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
      <Footer />

    </div>
  )
}

export default App