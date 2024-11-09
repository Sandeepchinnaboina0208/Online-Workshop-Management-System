import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import WorkshopList from './components/WorkshopList';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Contact from './components/Contact';
import Workshop from './components/Workshop';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/workshops" element={<WorkshopList />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/workshop/:workshopId' element={<Workshop />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
