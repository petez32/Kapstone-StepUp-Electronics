import React from "react";
import "../asset/home.css";
import { Carousel } from "react-bootstrap";
import { products } from "../products.json";
import Desktops from "../views/HomeDesktops.js";
import Laptops from "../views/HomeLaptops";
import Tablets from "../views/HomeTablets";
import Televisions from "../views/HomeTelevisions";
import Phones from "../views/HomePhones";

function Home() {
  return (
    <div className="home">
      <Carousel id="product-carousel">
        {products.map((item) => (
          <Carousel.Item key={item.id}>
            <img src={item.image} alt={item.name} />
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="homeContainer">
        <div className="homeBackground"></div>
        <div className="homeCategoryRow1">
          <h1>DESKTOP COMPUTERS</h1>
        </div>
        <div className="headerRow1">
          <Desktops />
        </div>

        <div className="homeCategoryRow2">
          <h1>LAPTOPS</h1>
        </div>
        <div className="headerRow2">
          <Laptops />
        </div>

        <div className="homeCategoryRow3">
          <h1>TABLETS</h1>
        </div>
        <div className="headerRow3">
          <Tablets />
        </div>

        <div className="homeCategoryRow4">
          <h1>TELEVISIONS</h1>
        </div>
        <div className="headerRow4">
          <Televisions />
        </div>

        <div className="homeCategoryRow5">
          <h1>CELL PHONES</h1>
        </div>
        <div className="headerRow5">
          <Phones />
        </div>
      </div>
    </div>
  );
}

export default Home;
