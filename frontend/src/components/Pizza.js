import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import { add, minus, addToCart } from "../states/actions/cartActions";
import { useDispatch } from "react-redux";

export default function Pizza({ pizza }) {
  const dispatch = useDispatch();
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(0);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);
  function addtocart() {
    if (quantity > 0) {
      dispatch(addToCart(pizza, quantity, variant));
    }
  }
  function incrementClick() {
    dispatch(add(1));
    setQuantity((prevQuantity) => prevQuantity + 1);
    if (!showQuantityButtons) {
      setShowQuantityButtons(true);
    }
  }

  function decrementClick() {
    dispatch(minus(1));
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
    if (quantity === 1) {
      setShowQuantityButtons(false);
    }
  }

  const showAddButton = !showQuantityButtons && quantity === 0;

  return (
    <div className="card shadow">
      {console.log(pizza)}
      <div className="row g-0">
        <div className="col-md-7">
          <div className="card-body">
            <h5 className=" title-primary">{pizza.name}</h5>
            <p className="card-text text-muted">{pizza.description}</p>
            <div className="d-flex  mb-1">
              <div className="form-label m-0 px-2 text-center">
                Select crust size
                <select
                  className="form-select"
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                >
                  {pizza.variants.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-label m-0 px-2">
                Quantity
                {/* <select
                  className="form-select"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select> */}
                {showAddButton && (
                  <button
                    className="btn btn-sm fw-bold"
                    onClick={incrementClick}
                  >
                    Add <FontAwesomeIcon className="pt-1 px-1" icon={faPlus} />
                  </button>
                )}
                {showQuantityButtons && (
                  <div className="d-flex">
                    <button
                      className="btn btn-sm fw-bold"
                      onClick={decrementClick}
                    >
                      -
                    </button>
                    <span className="mx-2 fw-bold">{quantity}</span>
                    <button
                      className="btn btn-sm fw-bold"
                      onClick={incrementClick}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
            <span className="fw-bold fs-5">₹{pizza.prices[variant]}</span>
          </div>
        </div>
        <div className="col-md-5 position-relative">
          <div className="d-flex align-items-center justify-content-center ">
            <img
              src={pizza.image}
              className="img-fluid p-2"
              alt={pizza.name}
              style={{ height: "180px", objectFit: "cover" }}
            />
          </div>
          <div className="position-absolute bottom-15 start-50 translate-middle-x d-flex align-items-center justify-content-center ">
            <button className="btn btn-success mx-2" onClick={addtocart}>
              <span className="px-1">
                Place in
                <FontAwesomeIcon className="px-1" icon={faCartShopping} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
