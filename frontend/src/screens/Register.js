import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../states/actions/userAction'
import Success from "../components/Success";
import Error from "../components/Error";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const {loading , success , error} = useSelector((state) => state.registerUserReducers)

  const dispatch = useDispatch();
  function registerClick(){
    if(password !== cpassword){
      alert("Password does not match")
    }else{
      const user ={
        name, email, password
      }
      console.log(user);
      dispatch(registerUser(user))
    }
  }
  return (
    <div className="row d-flex justify-content-center ">
      {error && <Error error={error}/> }
      {success && <Success success=" User Successfully Registered"/>}
      <div className="d-flex card shadow flex-column my-5 p-4 w-25">
      
        <h1 className="text-center fw-bold fs-2">REGISTER</h1>
        <div className="mb-2 fw-bold">
          Username
          <br />
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control fs-6"
            placeholder="Username"
            onKeyDown={(e)=>{if(e.key === 'Enter')registerClick()}}
          />
        </div>
        <div className="mb-2 fw-bold">
          Email
          <br />
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control fs-6"
            onKeyDown={(e)=>{if(e.key === 'Enter')registerClick()}}
            placeholder="Email or Phone no"
          />
        </div>
        <div className="mb-2 fw-bold">
          Create Password
          <br />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control fs-6"
            placeholder="Create strong password"
            onKeyDown={(e)=>{if(e.key === 'Enter')registerClick()}}
          />
        </div>
        <div className="mb-2 fw-bold">
          Confirm Password
          <br />
          <input
            value={cpassword}
            type="password"
            onChange={(e) => setCPassword(e.target.value)}
            className="form-control fs-6"
            placeholder="Create strong password"
            onKeyDown={(e)=>{if(e.key === 'Enter')registerClick()}}
          />
        </div>
        <div className="">
          <Link
            to={""}
            className="d-flex justify-content-center btn my-3 p-2"
            onClick={registerClick}
          >
            {" "}
            Register{" "}
          </Link>
        </div>
        <Link to={"/login"}>Already a member? Login </Link>
      </div>
    </div>
  );
}
