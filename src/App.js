import logo from './logo.svg';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IncrementDecrement from './component/IncDecCounter';
import Form from './component/Form';
import Home from './component/Home';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/counter-app" element={<IncrementDecrement />} />
          <Route path="/controlled-form" element={<Profile />} />
          <Route path="/" element={<Home />} />


        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
