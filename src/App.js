import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Destinations from './pages/Destinations'

export default function App() {
  return (
    <div>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/destination' element={<Destinations/>}/>
        </Routes>
        <Footer />
    </div>
  )
}
