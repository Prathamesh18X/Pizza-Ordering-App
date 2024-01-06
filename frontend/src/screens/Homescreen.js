import React from 'react'
import {Link} from 'react-router-dom'
export default function Homescreen() {
  return (
    <div style={{backgroundImage : 'url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', height: '100vh', backgroundSize: 'cover' }} className='p-5 flex-column
     justify-content-between'>
      <div className="d-flex p-2 m-5 ">
        <div className="flex-container">
          <h2 className='title p-2 fw-bold my-4'>
              Welcome,
          </h2>
          <div className='p-2 '>
          Explore the delectable world of pizzas crafted with passion and quality ingredients. Whether you crave classic favorites or adventurous flavors, our menu has something to satisfy every pizza lover's palate.          </div>
          <div className='d-flex p-2 my-5'>
            <div className='m-2'>
            <Link to="/store" className='btn px-3 fw-bold rounded-pill btn-lg'>Store
            {/* <FontAwesomeIcon icon="fa-solid fa-pizza-slice" /> */}
            </Link>
            </div>
            <div className='m-2'>
            <Link to="/auth" className='btn px- fw-bold rounded-pill btn-lg'>Register/signup</Link>
            </div>
          </div>
        </div>
        <div>
        <img src="https://www.freeiconspng.com/uploads/pizza-png-22.png" width="550" alt="pizza service png" />
        </div>
      </div>
    </div>
  )
}

