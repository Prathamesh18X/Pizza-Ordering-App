import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Storescreen from "./screens/Storescreen";
import Cartscreen from "./screens/Cartscreen";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/store" exact element={<Storescreen />} />
          <Route path="/cart" exact element={<Cartscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
