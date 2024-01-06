import React from 'react'
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';

export default function Cartscreen() {
  const cartState = useSelector((state) => state.cartReducers);
  const cartItems = cartState.cartItems
  return (
    <div>
      <Navbar />
      {console.log(cartItems) }
      <h2 className="text-center">My cart</h2>
      <div className="container">
        <table className="table text-center ">
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Pizza Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Variant</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Update</th>
            </tr>          
          </thead>
          <tbody>
              {cartItems.map((pizza,index) => (
                  (<tr>
              <th scope='row'>{index + 1}</th>
              <td>{pizza.name}</td>
              <td>{pizza.quantity}</td>
              <td>{pizza.variant}</td>
              <td>${pizza.price}</td>
              <td></td>
            </tr>)
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
