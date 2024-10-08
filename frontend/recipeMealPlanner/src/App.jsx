import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Aside from './components/Aside';
import Dashboard from './components/Dashboard';
import {AuthProvider} from './auth/authSlice';
function App() {
  return (
    <>
      <div className='homePage'>
      
      <AuthProvider>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </AuthProvider>
      </div>
    </>
  )
}

export default App