import { useState } from 'react'
import { BrowserRouter ,  } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css'
import { Navbar } from './Components/General/Navbar';
import { Sidebar } from './Components/General/Sidebar';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </>
  )
}

export default App
