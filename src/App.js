import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homeview from './components/Homeview';
import Bookview from './components/Bookview';
import Reservation from './components/Reservation';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div>
    	<BrowserRouter>
      		<Routes>
        		<Route path="/" element={<Homeview/>}/>
        		<Route path="/book/:type" element={<Bookview/>}/>
        		<Route path="/form/:hour" element={<Reservation/>}/>
        		<Route path="/confirmation/:id" element={<Confirmation/>}/>
      		</Routes>
      	</BrowserRouter>
    </div>
  );
}

export default App;
