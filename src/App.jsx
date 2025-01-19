import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import BookaTrip from './Pages/BookaTrip'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/booking' element={<BookaTrip/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App