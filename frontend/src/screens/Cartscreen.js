import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../states/actions/cartActions";
import { removeFromCart } from "../states/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cartscreen() {
  const cartState = useSelector((state) => state.cartReducers);
  const cartItems = cartState.cartItems;
  const totalPrice = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "36px" }}>
      <Navbar />
      <div
        className="d-flex justify-content-center"
        style={{ padding: "32px" }}
      >
        {console.log(cartItems.length)}
        <div className="card shadow p-3 m-3 w-75">
          <h2 className="mx-4">Cart Items </h2>
          <hr />
          <div className="container">
            {cartItems.length ? (
              <table className="table text-center ">
                <thead className="text-success fs-4">
                  <tr>
                    <th scope="col" className="px-4">
                      Sr no.
                    </th>
                    <th scope="col" className="px-4">
                      Pizza Name
                    </th>
                    <th scope="col" className="px-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-4">
                      Variant
                    </th>
                    <th scope="col" className="px-4">
                      Amount
                    </th>
                    <th scope="col" className="px-4">
                      Update
                    </th>
                    <th scope="col" className="px-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((pizza, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{pizza.name}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.variant}</td>
                      <td>₹ {pizza.price}</td>
                      <td>
                        <div className="d-flex justify-content-center ">
                          <button
                            className="btn btn-sm fw-bold"
                            onClick={() => {
                              dispatch(
                                addToCart(
                                  pizza,
                                  pizza.quantity - 1,
                                  pizza.variant
                                )
                              );
                            }}
                          >
                            -
                          </button>
                          <span className="mx-2 fw-bold">{pizza.quantity}</span>
                          <button
                            className="btn btn-sm fw-bold"
                            onClick={() => {
                              dispatch(
                                addToCart(
                                  pizza,
                                  pizza.quantity + 1,
                                  pizza.variant
                                )
                              );
                            }}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div>
                          <FontAwesomeIcon
                            className="px-4 "
                            role="button"
                            onClick={() => {
                              dispatch(removeFromCart(pizza));
                            }}
                            icon={faTrash}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <h4 className="text-center pt-4 fw-bold">
                  {" "}
                  Your Cart is Empty
                </h4>
                <div className="d-flex justify-content-center">
                  <Link className="btn btn-lg w-10 text-center" to="/store">
                    Go to Store
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card shadow p-3 m-3 w-25 h-25">
          <h2>Summary</h2>
          <hr />
          <div className="fw-bold">
            <div className="d-flex m-2 fs-5 justify-content-between">
              <span>Total Amount :</span>
              <span>₹ {totalPrice}</span>
            </div>
            <Link to={"/"} className="btn btn-lg">
              Checkout
              <FontAwesomeIcon className="p-2" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
