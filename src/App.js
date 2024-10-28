import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
    	<BrowserRouter>
      		<Routes>
        		<Route path="/" element={<Button variant="primary">Button as link</Button>}/>
        		<Route path="/book" element={<div>Book</div>}/>
      		</Routes>
      	</BrowserRouter>
    </div>
  );
}

export default App;
