import React from 'react'
import Parent from './components/Parent'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'

const App = () => {
  const element=<div>Hello world</div>;
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </>
  )
}

export default App
