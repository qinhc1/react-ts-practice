import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import logo from '@/assets/logo.svg'
import './App.css'
import Layout from './pages/Layout'
import Login from './pages/Login'


function App() {

  return (
    <div className= "App" >
      <BrowserRouter>
        <React.Suspense fallback={<>正在加载……</>}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/*" element={<Layout />}></Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
