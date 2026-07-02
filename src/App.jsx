import React from 'react'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Login from './components/Login'

const App = () => {
  return (
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='menu' element={<Menu/>}/>
  <Route path='cart' element={<Cart/>}/>

  <Route path='/login' element={<Home/>}/>

</Routes>
  )
}

export default App