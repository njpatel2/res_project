import React, { useState } from "react";
import "./Css/restaurentDetailsCss.css"; 

import ProductCard from "./ProductCard";
import RestaurantMainDetails from "./RestaurantMainDetails";
// import Menu from "./Menu";
import BillAndMap from "./BillAndMap";

import NewMenu from "./NewMenu";

function RestaurentDetails() {
  let productDetails = [
    {
      id: "p1",
      name: "product1",
      details: "details1",
      price: "20 $",
    },
    {
      id: "p2",
      name: "product2",
      details: "details2",
      price: "22 $",
    },
    {
      id: "p3",
      name: "product3",
      details: "details3",
      price: "23 $",
    },
    {
      id: "p4",
      name: "product4",
      details: "details4",
      price: "24 $",
    },
  ];

  return (
    <div>
      <RestaurantMainDetails />

      <div className="sectionRestaurant sectionRestaurant-BillMap">
        <div className="sub-section sub-sectionRestaurant-product ">
          {/* <Menu /> */}
          <NewMenu/>

          <div>
            <div className="sdiv">
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Dish..."
                />
                <button className="search-button">
                  <svg
                    className="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.7 20.3l-4.8-4.8c1-1.4 1.5-3.2 1.5-5 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c1.8 0 3.6-0.5 5-1.5l4.8 4.8c0.4 0.4 1 0.4 1.4 0s0.4-1 0-1.4zM2 11c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="product-list">
              {productDetails.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  details={product.details}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
        <BillAndMap />
      </div>
    </div>
  );
}

export default RestaurentDetails;
