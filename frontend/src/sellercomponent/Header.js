// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Import a CSS file for styling
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" href="/">TiffinDelights</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/menu">MenuManagement</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/orders">Order</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/profile" tabindex="-1" aria-disabled="true">Profile</Link>

            </li>
            <li class=" nav-item">

              {auth ? <Link class="nav-link active" to="/logout" onClick={logout} to="/login">Logout</Link> : <Link to="/login">Login</Link>}
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;
