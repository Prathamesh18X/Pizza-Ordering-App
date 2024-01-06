import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
import getAllPizzas from "../states/actions/pizzaActions";

export default function Homescreen() {
  const pizzasState = useSelector((state) => state.getAllPizzasReducers);
  const { pizzas, error, loading } = pizzasState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div className="">
      <Navbar />
      <div className="row justify-content-center mx-5">
        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something Went Wrong...</h1>) : 
        (
          pizzas.map((pizza) => (
            <div key={pizza._id} className="p-2 col-md-6">
              <Pizza pizza={pizza} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
