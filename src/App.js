import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homeview from './components/Homeview';
import Bookview from './components/Bookview';
import Reservation from './components/Reservation';

function App() {
  return (
    <div>
    	<BrowserRouter>
      		<Routes>
        		<Route path="/" element={<Homeview/>}/>
        		<Route path="/book/:type" element={<Bookview/>}/>
        		<Route path="/form/:hour" element={<Reservation/>}/>
      		</Routes>
      	</BrowserRouter>
    </div>
  );
}

export default App;
