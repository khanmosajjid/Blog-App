import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import {Container} from 'reactstrap'
import './login.css'

 const Login = () => {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        // e.preventDefault();
        if(name==""||email==""||password==""){
            alert("please fill form");
            return;
        }
        setData()
        let user=getData();
        dispatch(login({
            name:user.name,
            email:user.email,
            password:user.password,
            loggedIn:true
        }))
     
    }

    const setData=()=>{
        let user={name:name,email:email,password:password}
        localStorage.setItem('user',JSON.stringify(user));
    }
    const getData=()=>{
        let user=localStorage.getItem('user');
        user=JSON.parse(user);
        console.log("user data get is ----->",user.name)
        return user;
        
    }
    return (
        <Container className="login" fluid>
            <form className="login__form" onSubmit={(e)=>handleSubmit(e)}>
            <h1>Login here</h1>
            <input type="name" 
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <input type="email" 
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input type="password" 
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" className="submit__btn" href="/home">Submit</button>
            </form>
        </Container>
    )
}
export default Login
