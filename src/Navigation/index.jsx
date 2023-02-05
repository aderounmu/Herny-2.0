import React from 'react'
import { Routes,  Route , Navigate, Outlet } from 'react-router-dom'
import Catalogue from '../Pages/Catalogue';
import { Roster } from '../Pages/Roster';
import { Navbar } from '../Components/General/Navbar';
import { Sidebar } from '../Components/General/Sidebar';


function Navigation() {
  return (
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <Sidebar/>
          <div className='sm:mt-20 sm:ml-64 min-h-screen bg-teal-50/50 p-16'>
            <Outlet />
          </div>
          </>
        }>
          <Route index element={<>hello</>} />
          <Route path={'roster'} element={<Roster/>} />
          <Route path={'catalogue'} element={<Catalogue/>} />
        </Route>
       
      </Routes>
  );
}

export default Navigation