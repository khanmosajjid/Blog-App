import React from 'react'
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

 const Logout = () => {
   
    const dispatch=useDispatch()
    const handleLogout=(e)=>{
        e.preventDefault();
       window.localStorage.removeItem('user')
        dispatch(logout());
        
    }
    const getData=()=>{
        let user=localStorage.getItem('user');
        user=JSON.parse(user);
       
        return user;
        
    }
    const user=getData()
    return (
        <div>
            <h1>Welcome <span className="user_name">{user.name}</span></h1>
            <button className="logout__button" onClick={(e)=>{
                handleLogout(e)
            }}>Logout</button>
        </div>
    )
}

export default Logout;
