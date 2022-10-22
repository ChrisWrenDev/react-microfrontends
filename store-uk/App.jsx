import React from "shared-libraries/react";
import Products from "products/Products";
// import Button from "ui-components/Button";
// import Dialog from "ui-components/Dialog";
// import ToolTip from "ui-components/ToolTip";
// import "./app.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="index.html">STORE UK</a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="product.html">Products</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="account.html">Account</a>
              </li>
            </ul>
          </nav>
          <a href="cart.html">
            <img
              src="https://i.ibb.co/PNjjx3y/cart.png"
              alt=""
              width="30px"
              height="30px"
            />
          </a>
          <img
            src="https://i.ibb.co/6XbqwjD/menu.png"
            alt=""
            className="menu-icon"
            onclick="menutoggle()"
          />
        </div>
      </div>
      {/* Products  */}
      <Products />
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and iso mobile phone.</p>
              <div className="app-logo">
                <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
              </div>
            </div>

            <div className="footer-col-2">
              <img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt="" />
              <p>
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>

            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>

            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright &copy; 2021 - STORE UK</p>
        </div>
      </div>
    </div>
  );
}

export default App;
