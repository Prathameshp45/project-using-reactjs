import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../ThemeChange/ThemeProvider';


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={"qw.png"} width="30" height="30" alt="Logo" />
          Pratham.IN
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            )}
            
          </ul>

          <div className="search-container mx-auto">
            <input type="text" className="search-input" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>

          <div className="d-flex align-items-center">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="btn btn-success mr-2">Login</Link>
                <Link to="/register" className="btn btn-success ">Register</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            )}

            <button onClick={toggleTheme} className="btn btn-secondary mx-2">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
