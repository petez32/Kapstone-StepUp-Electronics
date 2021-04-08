import React from "react";
import "../asset/home.css";
import { Carousel } from "react-bootstrap";
import { products } from "../products.json";
import Product from "../component/Product";
import Header from "../component/Header";

function Home() {
  return (
    <div className="home">
      <Header />

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
        <div className="headerRow1">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="headerRow2">
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
