import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
const [userName,setUserName]=useState("")




const handleSubmit=()=>{
    localStorage.setItem("userName",userName);
    localStorage.setItem("userName",userName);
    
}


  return (
    <div>
        <h1>Please Create A Profile</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Home