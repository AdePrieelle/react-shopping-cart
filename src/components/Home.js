import React from 'react';
import '../styles/Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="shop-categories">
        <div className="shop-category shop-category-all">
          <div className="shop-category-title">
            <Link to="shop/all">
                Shop All
            </Link>
          </div>
        </div>
        <div className="shop-category shop-category-women">
          <div className="shop-category-title">
            <Link to="shop/women">
              Shop Women's
            </Link>
          </div>
        </div>
        <div className="shop-category shop-category-men">
         <div className="shop-category-title">
            <Link to="shop/men">
              Shop Men's
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
