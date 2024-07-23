import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurYachts from './pages/OurYachts';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Reservations from './pages/Reservations';
import YachtDetails from './pages/YachtDetails';
import './styles/App.css';
import AddYacht from './pages/AddYacht';



function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/yachts" element={<OurYachts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/yachts/:id" element={<YachtDetails />} />
                    <Route path="/addyacht" element={<AddYacht />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
