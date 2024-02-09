import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { loginUser } from "../states/actions/userAction";
import Error from "../components/Error";
import Success from "../components/Success";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading , success, error} = useSelector((state) => state.loginUserReducers)

  useEffect(()=>{
      if(localStorage.getItem('currentUser')){
        window.location.href='/store'
      }
  },[])

  const dispatch = useDispatch();

  function loginClick() {
    if (email === "" || password === "") {
      alert("Enter all fields");
    } else {
      const user = { email, password };
      dispatch(loginUser(user));
    }
  }
  return (
    <div className="row d-flex justify-content-center ">
      {error && <Error error={error}/> }
      {success && <Success success="Login Successful"/> }
      <div className="d-flex card shadow flex-column my-5 p-4 w-25">
        <h1 className="text-center fw-bold fs-2">LOGIN</h1>
        <div className="mb-2 fw-bold">
          Email
          <br />
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control fs-6"
            placeholder="Email or Phone no"
            onKeyDown={(e)=>{if(e.key === 'Enter')loginClick()}}
          />
        </div>
        <div className="fw-bold">
          Password
          <br />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control fs-6"
            placeholder="Create strong password"
            onKeyDown={(e)=>{if(e.key === 'Enter')loginClick()}}
          />
        </div>
        <div>
          <span className="d-flex justify-content-end">forgot password ?</span>
        </div>
        <div className="">
          <Link
            to={""}
            className="d-flex justify-content-center btn my-3 p-2"
            onClick={loginClick}
            
          >
            {" "}
            Login{" "}
          </Link>
        </div>
        <Link to={"/register"}>Register? </Link>
      </div>
    </div>
  );
}
