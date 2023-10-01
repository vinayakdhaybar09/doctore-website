import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import Services from './pages/Services';
import './style/app.scss';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/bookings' element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
