import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Storescreen from "./screens/Storescreen";
import Cartscreen from "./screens/Cartscreen";
import Homescreen from "./screens/Homescreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/store" exact element={<Storescreen />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
