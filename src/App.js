import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Homeview from './components/Homeview';

function App() {
  return (
    <div>
    	<BrowserRouter>
      		<Routes>
        		<Route path="/" element={<Homeview/>}/>
        		<Route path="/book" element={<Button variant="primary">Button as link</Button>}/>
      		</Routes>
      	</BrowserRouter>
    </div>
  );
}

export default App;
