import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from '../pages/slider'
import Home from './../pages/home/index';

const Routing = () => {
  return (
<>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/slider' element={<Slider/>}/>

</Routes>

</>
  )
}

export default Routing