import React from "react";

import { Carousel } from "react-bootstrap";
import { products } from "../products.json";
import Product from "../component/Product";

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
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="homeCategoryRow2">
          <h1>LAPTOPS</h1>
        </div>
        <div className="headerRow2">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="homeCategoryRow3">
          <h1>TABLETS</h1>
        </div>
        <div className="headerRow3">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="homeCategoryRow4">
          <h1>TELEVISIONS</h1>
        </div>
        <div className="headerRow4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <div className="homeCategoryRow5">
          <h1>CELL PHONES</h1>
        </div>
        <div className="headerRow5">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
