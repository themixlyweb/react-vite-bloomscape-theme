import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ScrollToTop from "./components/ScrollToTop";


export default function App(){
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Layout>
  )
}
