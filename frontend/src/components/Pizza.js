import React, { useState } from "react";

export default function Pizza({ pizza }) {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(0);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    if (!showQuantityButtons) {
      setShowQuantityButtons(true);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
    if (quantity === 1) {
      setShowQuantityButtons(false);
    }
  };
  console.log(pizza); // Log pizza object to the console

  const showAddButton = !showQuantityButtons && quantity === 0;
  return (
    <div className="card mb-3 shadow">
      <div className="row g-0">
        
        <div className="col-md-8">
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
        <div className="col-md-4 position-relative">
          <img
            src={pizza.image}
            className="img-fluid"
            alt={pizza.name}
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="position-absolute bottom-15 start-50 translate-middle-x d-flex align-items-center">
            {showAddButton && (
              <button
                className="btn btn-success mx-2"
                onClick={incrementQuantity}
              >
                <span className="px-2">Add+</span>
              </button>
            )}
            {showQuantityButtons && (
              <>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
