import React from 'react';
import style from './Navbar.module.css';
import logo from './imgs/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className={style.navBarBack + " navbar navbar-expand-lg"}>
        <div className="container">
          <div className='d-flex align-items-center me-5'>
            <Link className="navbar-brand" to={'home'}>
              <img src={logo} alt="logo image" className={style.logoEdit} />
            </Link>
            <div className={style.searchContainer + " ms-5 ps-5"}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search..."
              />
              <i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'home'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'home'}>Explore</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" aria-current="page" to={'home'}>How It Works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'home'}>Community</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'home'}>Activity</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'home'}>Pages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to={'home'}>Contact</Link>
              </li>
            </ul>
            <div className='ms-1'>
              <button type="button" className="btn btn-secondary position-relative me-3 rounded-4">
                <i className="fa-regular fa-bell text-white"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                </span>
              </button>
              <button className='btn btn-secondary me-3 rounded-4'>
                <i className="fa-regular fa-user text-white"></i>
              </button>
              <button className='btn btn-primary rounded-5'>Connect Wallet</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
