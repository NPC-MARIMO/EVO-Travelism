import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Destination from './Pages/Destination'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* user routes */}
        <Route 
          path="/" 
          element={<UserLayout />}
        >
          <Route path="home" element={<Home/>} />
          <Route path="destination" element={<Destination />} />
        </Route>

        {/* admin routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

