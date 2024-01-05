import React, { useState } from "react";
import { add,minus,addToCart } from '../states/actions/cartActions';
import { useDispatch } from 'react-redux';

export default function Pizza({ pizza }) {
  const dispatch = useDispatch();
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(0);
  // const [showQuantityButtons, setShowQuantityButtons] = useState(false);
function addtocart(){
  dispatch(addToCart(pizza , quantity , variant))
}
  // function incrementClick(){
  //   dispatch(add(1));
  //   dispatch(addToCart(pizza, quantity, variant));
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  //   if (!showQuantityButtons) {
  //     setShowQuantityButtons(true);
  //   }
  // }

  // function decrementClick(){
  //   dispatch(minus(1));
  //   dispatch(addToCart(pizza, quantity, variant));
  //   if (quantity > 0) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  //   if (quantity === 1) {
  //     setShowQuantityButtons(false);
  //   }
  // }

  // const showAddButton = !showQuantityButtons && quantity === 0;

  return (
    
    <div className="card shadow-sm">
      {console.log(pizza)}
      <div className="row g-0">
        
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <p className="card-text text-muted">{pizza.description}</p>
            <div className="mb-1">
              <label className="form-label m-0">select your size & crust
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
              </label>
            </div>
            <span className="fw-semibold fs-5">₹{pizza.prices[variant]}</span>
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
          <button
                className="btn btn-success mx-2"
                onClick={addtocart}
              >
                <span className="px-2">Cart+</span>
              </button>
          </div>
          {/* <div className="position-absolute bottom-15 start-50 translate-middle-x d-flex align-items-center justify-content-center ">
            {showAddButton && (
              <button
                className="btn btn-success mx-2"
                onClick={incrementClick}
              >
                <span className="px-2">Add+</span>
              </button>
            )}
            {showQuantityButtons && (
              <>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={decrementClick}
                >
                  -
                </button>
                <span className="mx-2r">{quantity}</span>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={incrementClick}
                >
                  +
                </button>
              </>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
