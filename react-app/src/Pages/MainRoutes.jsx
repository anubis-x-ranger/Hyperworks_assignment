import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auctions" element={<Home/>} />
            <Route path="/auctions/:id" element={<Home/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes