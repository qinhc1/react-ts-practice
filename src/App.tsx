import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import logo from '@/assets/logo.svg'
import './App.css'
import Layout from './pages/Layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<>正在加载……</>}>
          <Layout />
        </React.Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
