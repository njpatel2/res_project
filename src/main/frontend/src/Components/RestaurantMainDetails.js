import React, { useState, useEffect } from "react";
import { ApiCalls } from "./Apicalls";


let DUMMY_RESTAURANT = [];
function RestaurentMainDetails(props) {
  const [Restaurantdetail, setRestaurantdetail] = useState(DUMMY_RESTAURANT);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ApiCalls("/api/getRestaurentDetails", "GET", null);
        setRestaurantdetail(response);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    }

    fetchData();
  }, []);
  // useEffect(() => {
  //   restaurentdet();
  // }, []);


  // let restaurentdet = (props) => {
  //   fetch("/api/getRestaurentDetails", {
  //     method: "GET",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setRestaurantdetail(data);
  //     });
  // };

  // let restaurentdet = (props) => {
  //   let t = ApiCalls("/api/getRestaurentDetails","GET",null);
  //   setRestaurantdetail(t);
  // };

  return (
    <div className="sectionRestaurant sectionRestaurant-product ">
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + Restaurantdetail.restaurantImage}
          alt="nn"
        />
      </div>
      <div className="sectionRestaurant-product-content">
        <h1>{Restaurantdetail.restaurantName}</h1>
        <p>
          <strong>Popular dishes :</strong> {Restaurantdetail.popularDishes}
        </p>
      </div>
    </div>
  );
}

export function restaurentdet(props) {
  return fetch("/api/getRestaurentDetails", {
    method: "GET",
    headers: {
      "content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data; // Return the data to be used elsewhere
    });
}

export default RestaurentMainDetails;
