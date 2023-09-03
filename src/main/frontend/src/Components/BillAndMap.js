import React from "react";


function BillAndMap() {
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
    <div className="sub-section sub-sectionRestaurant-BillMap">
      <h2>Cart</h2>
      <table className="data-table">
        <tbody>
          <tr>
            <th className="column1">Items</th>
            <th className="column2">Price</th>
          </tr>
          {bill.map((item) => (
            <tr>
              <td className="column1">{item.item}</td>
              <td className="column2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="table-button">Pay</button>

      <h5>Google Map</h5>
      <div className="google-map"></div>
    </div>
  );
}

export default BillAndMap;
