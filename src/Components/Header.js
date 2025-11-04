


import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../Images/Logo-.png";
import './Header.css';

function Header() {
  const navigate = useNavigate();
  // simple login detection — change to your auth logic as needed
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('token') || localStorage.getItem('user'))
  );

  useEffect(() => {
    // keep state in sync if other tabs change auth (optional)
    const onStorage = (e) => {
      if (e.key === 'token' || e.key === 'user') {
        setIsLoggedIn(Boolean(localStorage.getItem('token') || localStorage.getItem('user')));
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Also detect localStorage changes made in the same tab (e.g. when login sets token)
  useEffect(() => {
    // wrap setItem to emit a custom event we can listen to
    const originalSetItem = localStorage.setItem.bind(localStorage);

    const wrappedSetItem = (key, value) => {
      originalSetItem(key, value);
      const ev = new Event('localStorageSet');
      ev.key = key;
      ev.newValue = value;
      window.dispatchEvent(ev);
    };

    localStorage.setItem = wrappedSetItem;

    const onLocalSet = (e) => {
      if (e.key === 'token' || e.key === 'user') {
        setIsLoggedIn(Boolean(localStorage.getItem('token') || localStorage.getItem('user')));
      }
    };

    window.addEventListener('localStorageSet', onLocalSet);

    return () => {
      // restore original
      localStorage.setItem = originalSetItem;
      window.removeEventListener('localStorageSet', onLocalSet);
    };
  }, []);

  const handleLogout = () => {
    // clear auth items — adapt to your app's auth keys
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // optionally redirect
    navigate('/');
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      fixed="top"
      className="custom-navbar shadow-sm"
    >
      <Container>
        {/* Logo + Brand */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img src={logo} alt="Nature's Cure" className="navbar-logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Centered Navigation Links. Hide Home when logged in per requirement */}
          <Nav className="mx-auto align-items-center">
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/" className="nav-link-custom px-4">
                Home
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/about" className="nav-link-custom px-4">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom px-4">
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Auth Buttons: show Login/Signup when logged out; Logout when logged in */}
          <Nav className="auth-buttons">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;