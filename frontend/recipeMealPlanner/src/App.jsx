import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import Aside from './components/Aside';

function App() {
  return (
    <>
      <div className='homePage'>
        <Aside />
      
      
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </div>
    </>
  )
}

export default App