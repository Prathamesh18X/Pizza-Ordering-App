import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  //const quantityState = useSelector((state) => state.cartReducers);
  const cartState = useSelector((state) => state.cartReducers);



  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div>La pino'z</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-left">
            <li className="nav-item px-2">
              <button className="btn">Login</button>
            </li>
            <li className="nav-item">
              <a href="/cart">
                <div>
                <button className="btn">Cart = {/*quantityState*/} {cartState.cartItems.length}</button>
                </div>
              </a>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
