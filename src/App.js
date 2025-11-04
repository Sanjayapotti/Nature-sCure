import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Header from './Components/Header';
import LoginPage from './Components/Login';
import SignupPage from './Signuppage';
import ForgotPassword from './Forgotpassword';
import About from './Components/About';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';

function App() {
  return (
   <Router>
      <div className="App">
        <Header/>
        <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
