import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStore } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../states/actions/userAction";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducers);
  const userState = useSelector((state) => state.loginUserReducers);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  return (
    <div className="w-100 fixed-top">
      <nav className="navbar navbar-expand-lg shadow-lg px-5 mb-5 bg-white rounded ">
        <div className="title-primary">
          <Link className=" text-black fw-bolder  btn bg-light fs-4 " to="/">
            Pizza Store <FontAwesomeIcon className="p-2 " icon={faStore} />
          </Link>
        </div>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-left">
            {currentUser ? (
              <li className="nav-item mx-2">
                <div className="d-flex justify-content-end">
                  <span className="text-center py-2 px-5">
                    Welcome, {currentUser.name}
                  </span>
                  <Link
                    to={"/login"}
                    className="btn "
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <li className="nav-item px-2">
                <Link to={"/login"} className="btn">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item position-relative">
              <Link to="/cart" className="btn">
                Cart
                {cartState.cartItems.length ? (
                  <div
                    className="translate-middle-y bg-black rounded-circle text-center px-2"
                    style={{ position: "absolute", top: "0", right: "0" }}
                  >
                    {cartState.cartItems.length}
                  </div>
                ) : (
                  <div></div>
                )}
                <FontAwesomeIcon className="p-1" icon={faCartShopping} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
