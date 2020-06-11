import React,{useState} from 'react';
import './room.css'
// import { Component } from 'react';
// let islit = 'true';

function Room() {
    let [islit,setlit] = useState(true);   
    let [tem,settem] = useState(22);   
    
    function lit()
    {
        setlit(true)
    }
    function dark()
    {
        setlit(false)
    }    
    function checkname(tem)
    {let bt = '';
    if(tem <= 20)
    {
        bt = 'blue';
    }
    else if(tem <= 30)
    {
        bt = 'yellow';
    }
    else if(tem <= 40)
    {
        bt = 'orange';
    }
    else
    {
        bt = 'red';
    }
return bt;
}
    return (
<div className={checkname(tem)}>
{/* Switch ON<br></br> */}
<button onClick={lit} className='bt' >ON</button>    
{/* Switch OFF<br/> */}
<button onClick={dark} className='bt'>OFF</button>&nbsp;&nbsp;&nbsp;<button onClick={() => settem(++tem)}  className='Inc' >+</button><button value="-" onClick={() => settem(--tem)}  className='Dec'>-</button>
<br/><p className="bt">It is {islit? 'Lit':'Dark'}! and temperature is {tem}<br/></p>
<div className={`room ${!islit? 'lit':'dark'}`}
></div></div>); 
}

export default Room;//Here Room is a Function name.