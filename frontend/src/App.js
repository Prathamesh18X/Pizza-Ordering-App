import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='row justify-content-center'>
        <Homescreen/>
        <Checkout/>
      </div>
    </div>
  );
}

export default App;
