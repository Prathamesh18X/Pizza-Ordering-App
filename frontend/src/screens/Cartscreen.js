import React from 'react'
import { useSelector } from 'react-redux';

export default function Cartscreen() {
  const cartState = useSelector((state) => state.cartReducers);
  const cartItems = cartState.cartItems
  return (
    <div>
      <div className="text-center">My cart</div>
      {console.log(cartItems) }
      <div className="container">
        <table className="table ">
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Pizza Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Variant</th>
              <th scope='col'>Amount{"($)"}</th>
            </tr>          
          </thead>
          <tbody>
              {cartItems.map((pizza,index) => (
                  (<tr>
              <th scope='row'>{index + 1}</th>
              <td>{pizza.name}</td>
              <td>{pizza.quantity}</td>
              <td>{pizza.variant}</td>
              <td>{pizza.prices.variant}</td>
            </tr>)
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
