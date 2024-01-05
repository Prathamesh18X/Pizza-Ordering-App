import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import {BrowserRouter as Router, Route ,Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
        <Route path='/' exact element={<Homescreen/>}/>
        <Route path="/cart" exact element={<Cartscreen/>} />
        </Routes>
      </Router>
        
    </div>
  );
}

export default App;
