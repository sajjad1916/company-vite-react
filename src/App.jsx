import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './component/common/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
