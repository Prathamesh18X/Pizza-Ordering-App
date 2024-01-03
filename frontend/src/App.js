import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='row justify-content-center'>
        <Homescreen/>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
