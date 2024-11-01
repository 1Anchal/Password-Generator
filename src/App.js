import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/passchar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  let [uppercase,setuppercase]=useState(false);
  let [lowercase,setlowercase]=useState(false);
  let [number,setnumber]=useState(false);
  let [symbol,setsymbol]=useState(false);
  let [passlen,setpasslen]=useState(8);
  let[fpass,setfpass]=useState('');

  let createPass=()=>{
    let finalpass='';
    let charSet='';
    if(lowercase||uppercase||number||symbol){
      
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbol) charSet+=SC;
      for(let i=0;i<passlen;i++){
        finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setfpass(finalpass);
      toast.success("Password is generated!");
    }
    else{
      toast.error("Please select atleast one checkbox");
    }
    
  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpass);
    toast.success("Passord is copied!");
  }
  return (
    <>
    <div className='passwordBox'>
      
      <h2>
        Password Generator
      </h2>
      <div className='passwordBoxin'>
        <input type='text' value={fpass} readOnly /><button onClick={copypass} >copy</button>
        <ToastContainer/>
      </div>
      <div className='passlength'>
        <label>Password Length</label>
        <input type='number' value={passlen} max={20} min={5} onChange={(event)=>{setpasslen(event.target.value)}} />
      </div>
      <div className='passlength'>
        <label>Include uppercase letters</label>
        <input type='checkbox'checked={uppercase} onChange={()=>setuppercase(!uppercase)}/>
      </div>
      <div className='passlength'>
        <label>Include lowercase letters</label>
        <input type='checkbox'checked={lowercase} onChange={()=>setlowercase(!lowercase)} />
      </div>
      <div className='passlength'>
        <label>Include numbers</label>
        <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
      </div><div className='passlength'>
        <label>Include symbols</label>
        <input type='checkbox' checked={symbol} onChange={()=>setsymbol(!symbol)}/>
      </div>
      <button className='btn' onClick={createPass}>
        Generate Password
      </button>
      

      
    </div>
    </>
  );
}

export default App;
