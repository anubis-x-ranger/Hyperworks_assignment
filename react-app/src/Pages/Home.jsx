import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Prompt from '../Components/Prompt';
import { useEffect } from 'react';
const Home = () => {
const [userName,setUserName]=useState("")

const [userId, setUserId] = useState("");


let uN=localStorage.getItem("userName");
  return (
    <div>
      {uN=="" || uN==undefined ?<Prompt userName={userName} setUserName={setUserName} setUserId={setUserId}/>:<Navigate to="/auctions"></Navigate>}
        
    </div>
  )
}

export default Home