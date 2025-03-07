import React from 'react'
import { Link } from 'react-router-dom'
import headlogo from '../images/head-logo.webp' // Import Link from react-router-dom

const Header = () => {
  return (
    <div>
      <div className='row'>
      
      <div className='col-md-3'></div>
      <div className='col-md-3'></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='col-md-3'>
            <img src={headlogo} className='head-logo' alt='Logo'/>
          </div>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
              
              
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
              <li className="nav-item p-2">
                <Link className="nav-link active" aria-current="page" to="#">Home</Link> {/* Use 'to' instead of 'href' */}
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="#">Link</Link> {/* Use 'to' instead of 'href' */}
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Header;
