import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import User from "../../../images/user.svg";
import Compare from "../../../images/compare.svg";
import Cart from "../../../images/cart.svg";
import Wishlist from "../../../images/wishlist.svg"



const Header = () => {
  return (
    <>
      <header className="header-top-strip">

        <div className="containerxxl">
          <div className="Row">
            <div className="col6">
              <p className="header-top">
                Free Shipping Over $100 & Free  Returns
              </p>
            </div>
            <div className="col6">
              <p className="header-top">
                Hotline: <a className="textwhite" href="tel:+233 (0) 54 740 3691">+233 (0) 54 740 3691</a>
              </p>
            </div>
          </div>
        </div>
      </header>



      <header className="header-upper">
        <div className="container-xxl">
          <div className="Row">
            <div className="col2">
              <h2>
                <Link className="text-white">Logic Gate</Link>
              </h2>

            </div>
            <div className="col5">
              <div class="input-group">
                <input type="text" className="form-control" placeholder="Search Product Here..."
                  aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <div className='searchIconBox'>
                  <span className="input-group-text"
                  ><SearchIcon className="searchIcon" />
                  </span>
                </div>

              </div>
            </div>



            <div className="col5">
              <div className="header-upper-link">


                <div>


                  <Link to="/login" className="usercomponents">
                    <img src={User} alt="user" />
                    <p className="mb-0">Login<br /> My Account</p>
                  </Link>
                </div>

                <div>
                  <Link to="/compare-product"
                    className="usercomponents">
                    <img src={Compare} alt="Compare" />
                    <p className="mb-0">Compare <br /> Products</p>
                  </Link>
                </div>
                <div>


                  <Link to="/wishlist"
                    className="usercomponents">
                    <img src={Wishlist} alt="wishlist" />
                    <p className="mb-0">Favourite <br /> wishlist</p>
                  </Link>
                </div>

                <div>


                  <Link to="/cart" className="usercomponents">
                    <img src={Cart} alt="cart" />
                    <div className="cartContent">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                    <p className="mb-0"></p>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>


      </header>
      <header className="header-bottom">
        <div className="containerxxl">
          <div className="Row">
            <div className="col12">
              <div className="menu-buttom ">

                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt="" />
                      <span className="ShopCat">Shop Categories</span>
                    </button>


                  </div>

                </div>
                <div className="menu-links">
                  <div className="menubottom">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/products">Our Store</NavLink>
                    <NavLink to="/about">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </header>



    </>
  );
}

export default Header;

