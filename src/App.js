import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import Register from './components/register/Register'
import Homepage from "./components/homepage/Homepage"
import Topbar from "./components/topbar/Topbar"
import Single from "./components/single/Single"
import Write from "./components/write/Write"
import Settings from "./components/settings/Settings"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser)
  useEffect(() => {
    console.log("user in app is  ---->", user)
  }, [])
  return (
    <div className="App">
     
    <Router>
    
    <Routes>
      <Route exact path="/" element={user?<Homepage/>:<Login/>}/>
        
      
      <Route path="/posts" element={<Homepage/>}/>
       
      
      <Route path="/register" element={user?<Register/>:<Login/>}/>
         
     
      <Route path="/login" element={<Login/>}/> 
      <Route path="/post/:id" element={user?<Single/>:<Login/>}/>
       
      <Route path="/write" element={user?<Write/>:<Login/>}/>
      <Route path="/settings" element={user?<Settings/>:<Login/>}/>
     
    </Routes>
  </Router>
    </div>
  );
}

export default App;
