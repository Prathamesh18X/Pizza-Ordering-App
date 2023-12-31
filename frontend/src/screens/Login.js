import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  return (
    <div className='col d-flex justify-content-center '>
      <div  className='d-flex card shadow flex-column my-5 p-4 w-25'>
        <h1 className="text-center fw-bold fs-2">LOGIN</h1>
        <div className='mb-2 fw-bold'>
          Email<br/>
          <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className='form-control fs-6' placeholder='Email or Phone no'  />
        </div>
        <div className='fw-bold'>
          Password<br/>
          <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control fs-6' placeholder='Create strong password'/>
        </div>
        <div><span className='d-flex justify-content-end'>forgot password ?</span></div>
        <div className=''>
          <Link to={'/store'} className='d-flex justify-content-center btn my-3 p-2'> Login </Link>
        </div>
        <Link to={'/register'}>Register? </Link>
      </div>
    </div>

  )
}

