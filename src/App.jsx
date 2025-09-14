import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Office from './pages/Office'
import SwitchBoard from './pages/SwitchBoard'
import Circute from './pages/Circute'
import Smart from './pages/Smart'
import Inverter from './pages/Inverter'
import ServerRoom from './pages/ServerRoom'
import AboutUs from './componets/about/AboutUs '
import { AboutPage } from './pages/AboutPage'
import ContactUsPage from './componets/contact/ContactUsPage '

import Home from './pages/Home'
function App() {
  
  return (
    <>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about-us' element={<AboutPage/>}/>
           <Route path='/contact' element={<ContactUsPage/>}/>
           <Route path='/office' element={<Office/>}/>
           <Route path='/switch' element={<SwitchBoard/>}/>
           <Route path='/circuit' element={<Circute/>}/>
           <Route path='/smart' element={<Smart/>}/>
           <Route path='/inverter' element={<Inverter/>}/>
           <Route path='/server-room' element={<ServerRoom/>}/>
          
      </Routes>
    </>
  )
}

export default App
