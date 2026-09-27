import React from 'react';
import './App.css';
import Logo from './assets/white_logo.png';
import { Link } from 'react-router-dom';
import home from './home';
import login from './login';
// import registration from './registration';
// import catalogue from './catalogue';
// import cart from './cart';


function Header() {
  return (
    <>
       <nav class="navbar navbar-expand-sm">
        <div class="container-fluid justify-content-between">
            <a class="navbar-brand" href="#">
                <img src={Logo} alt="Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/registration" class="nav-link">Registration</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/catalogue" class="nav-link">Catalogue</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/cart" class="nav-link">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Header