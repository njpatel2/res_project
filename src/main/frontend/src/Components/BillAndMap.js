import React, { useState, useEffect } from "react";
import "./Css/BillAndMap.css";

function BillAndMap() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control cart animation

  useEffect(() => {
    // Use a timeout to delay the opening of the cart for the sliding effect
    setTimeout(() => {
      setIsCartOpen(true);
    }, 100); // Adjust the delay as needed
  }, []);

  let bill = [
    {
      key: "1",
      item: "Product 1",
      price: "10.99 $",
    },
    {
      key: "2",
      item: "Product 2",
      price: "3.99 $",
    },
    {
      key: "3",
      item: "Product 3",
      price: "9.99 $",
    },
    {
      key: "4",
      item: "Product 4",
      price: "25.99 $",
    },
  ];

  return (
    <div className="sub-section sub-sectionRestaurant-BillMap accordion">
      <div className="cart accordion-item">
        <h2 className="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Cart
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show">
          <div class="accordion-body">
            <table className="data-table">
              <tbody>
                <tr>
                  <th className="column1">Items</th>
                  <th className="column2">Price</th>
                </tr>
                {bill.map((item) => (
                  <tr key={item.key}>
                    <td className="column1">{item.item}</td>
                    <td className="column2">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="table-button">Pay</button>
          </div>
        </div>
      </div>
      <h5>Google Map</h5>
      <div className="google-map"></div>
    </div>
  );
}

export default BillAndMap;
