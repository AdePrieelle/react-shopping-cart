import React from 'react';
import '../styles/Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">Home</div>
      <Link to="shop/all">
        All
      </Link>
      <Link to="shop/men">
        Men
      </Link>
      <Link to="shop/women">
        Women
      </Link>
    </div>
  )
}

export default Home;
