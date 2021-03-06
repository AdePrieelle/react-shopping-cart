import React from 'react';
import '../styles/Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="home-title">Home</div>

      <Link to="shop/all">
        All
      </Link>
      <Link to="shop/men">
        Men
      </Link>
      <Link to="shop/women">
        Women
      </Link> */}
      <div className="shop-categories">
        <div className="shop-category shop-category-all">
          <div className="shop-category-title">
            Shop All
          </div>
        </div>
        <div className="shop-category shop-category-women">
          <div className="shop-category-title">
            Shop Women's
          </div>
        </div>
        <div className="shop-category shop-category-men">
         <div className="shop-category-title">
            Shop Men's
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
