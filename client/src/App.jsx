import { useState, useEffect, useContext, createContext } from 'react'
import { BrowserRouter, Routes, Route, useResolvedPath } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout.jsx"
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import MyInventory from './pages/MyInventory.jsx';
import CreateItem from './pages/CreateItem.jsx';
import Details from './pages/Details.jsx';


const api = "http://localhost:3001"
function App() {
  const [userId, setUserId] = useState(null)
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout userId = {userId}/>}>
          <Route index element={<Home api = {api}/>}/>
          <Route path = '/login' element={<Login api = {api} setUserId = {setUserId}/>}/>
          <Route path = '/create-account' element={<CreateAccount api = {api}/>}/>
          <Route path = '/my-inventory' element={<MyInventory api = {api} userid = {userId}/>}/>
          {/* conditionally renders the create item link if user is logged in */}
          {userId ? <Route path = '/create-item' element={<CreateItem api = {api} userId = {userId}/>}/> : null }
          <Route path = '/details/:id' element={<Details api={api}></Details>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
