import React from "react";
import { Link } from "react-router-dom";
import headlogo from "../images/head-logo.webp"; // Import logo

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {/* Logo */}
            <li>
              <Link to="#">
                <img className="head-logo" src={headlogo} alt="logo" />
              </Link>
            </li>

            {/* Space for alignment */}
            <li id="space2" />

            {/* Search Form */}
            <li>
              <div className="navbar-actions">
                <form action="#" className="navbar-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="I'm looking for..."
                    className="navbar-form-search"
                  />
                  <button
                    className="navbar-form-btn"
                    style={{ border: "none" }}
                  >
                    <i className="fas fa-search" style={{ border: "none" }} />
                  </button>
                  <button className="navbar-form-close">
                    <ion-icon name="close-circle-outline" />
                  </button>
                </form>
                <button className="navbar-search-btn">
                  <i className="fas fa-search" />
                </button>
              </div>
            </li>

            {/* Space for alignment */}
            <li id="space1" />
            <button type="button" className="btn btn-primary sell-button p-2">
              <i className="fas fa-box px-2"></i>
              Sell your product
            </button>

            {/* Wishlist Icon */}
            <li>
              <div className="wishlist-container">
                <i className="fas fa-heart p-2 wishlist-icon" />
                <div className="wishlist-side">
                  <p>Wishlist</p>
                  {/* You can put actual wishlist items here */}
                </div>
              </div>
            </li>

            {/* Cart Icon */}
            <li>
            <div className="wishlist-container">
                <i className="fas fa-shopping-cart p-2 wishlist-icon" />
                <div className="wishlist-side">
                  <p>Cart</p>
                  {/* You can put actual wishlist items here */}
                </div>
              </div>
            </li>

            {/* Profile Button */}
            <li>
              <button
                type="button"
                className="btn btn-dark p-2 px-2 signin-button"
              >
                Sign in
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
