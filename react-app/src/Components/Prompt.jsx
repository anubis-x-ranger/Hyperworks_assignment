import React from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const Prompt = ({userName,setUserName,setUserId}) => {
    let nav=useNavigate();
 
const handleSubmit=()=>{
  let id=uuidv4();
    localStorage.setItem("userName",userName);
    localStorage.setItem("userid",id);
    
  setUserId(`${id}`);
  move();
}

const move=()=>{
  nav("/auctions");
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

export default Prompt