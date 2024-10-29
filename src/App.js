import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homeview from './components/Homeview';
import Bookview from './components/Bookview';

function App() {
  return (
    <div>
    	<BrowserRouter>
      		<Routes>
        		<Route path="/" element={<Homeview/>}/>
        		<Route path="/book/:type" element={<Bookview/>}/>
        		<Route path="/form/:hour" element={<div>Reservation</div>}/>
      		</Routes>
      	</BrowserRouter>
    </div>
  );
}

export default App;
