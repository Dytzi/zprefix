import { useState, useEffect, useContext, createContext } from 'react'
import { BrowserRouter, Routes, Route, useResolvedPath } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout.jsx"
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import CreateAccount from './pages/CreateAccount.jsx';

const api = "http://localhost:3001"
function App() {
  const [userId, setUserId] = useState(0)
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout userId = {userId}/>}>
          <Route index element={<Home api = {api}/>}/>
          <Route path = '/login' element={<Login api = {api} setUserId = {setUserId}/>}/>
          <Route path = '/create-account' element={<CreateAccount api = {api}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
