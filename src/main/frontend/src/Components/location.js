import React from 'react';
import './Css/LocationCss.css';

import ramenImage from './images/ramen.png';
import ProductCard from "./ProductCard";

function location() {
  let productDetails = [
    {
      id: "p1",
      name: "product1",
      details: "details1",
      price: 20,
    },
    {
      id: "p2",
      name: "product2",
      details: "details2",
      price: 22,
    },
    {
      id: "p3",
      name: "product3",
      details: "details3",
      price: 23,
    },
    {
      id: "p4",
      name: "product4",
      details: "details4",
      price: 24,
    },
  ];

  return (
    <div className="containerLocation">
    <div className="sectionLocation">
      
        <div className="flier"><img alt="" width="1244" height="714" width_o="1244" height_o="714" data-src={ramenImage}
            data-mid="48229679" border="0" className="image-zoom" style={{ width: '50px', height: '50px' }} src={ramenImage}/>
           
    </div>
    <div className="flier2"><img alt=""  width="1244" height="714" width_o="1244" height_o="714" data-src={ramenImage}
        data-mid="48229679" border="0" className="image-zoom" style={{ width: '50px', height: '50px' }} src={ramenImage}/>
       
    </div> 
    <div className="flier3"><img alt=""  width="1244" height="714" width_o="1244" height_o="714" data-src={ramenImage}
    data-mid="48229679" border="0" className="image-zoom" style={{ width: '50px', height: '50px' }} src={ramenImage}/>
    
    </div> 
    <div className="flier4"><img alt=""  width="1244" height="714" width_o="1244" height_o="714" data-src={ramenImage}
    data-mid="48229679" border="0" className="image-zoom" style={{ width: '50px', height: '50px' }} src={ramenImage}/>
    
    </div> 
    <div className="flier5"><img alt=""  width="1244" height="714" width_o="1244" height_o="714" data-src={ramenImage}
    data-mid="48229679" border="0" className="image-zoom" style={{ width: '50px', height: '50px' }} src={ramenImage}/>
    
    </div> 
    <div className="flier6"><img alt=""  width="1244" height="714" width_o="1244" height_o="714" data-src={ramenImage}
    data-mid="48229679" border="0" className="image-zoom" style={{ width: '50px', height: '50px' }} src={ramenImage}/>
    
    </div> 
      <form className="formLocation">
      
      <div className="segmentLocation">
        <h1 className="zipCodeText">Enter ZIP Code</h1>
      </div>
      

      <label>
        <input className="locationFormInput" type="text" placeholder="Zip code" id="zipCode" name="zipCode"/>
      </label>
      
      <button className=" locationSubmitButton red " type="button" id="submit"><i className="icon ion-ios-pin"></i> Submit</button>
      
    
      
    </form>
   
    </div>
    <div className="sectionLocation">
       <div className="sub-sectionLocation">
        
        <div className="store-cards">
        <h2>Delivered by the restaurant</h2>
          
        {productDetails.map((product) => (
                
                <ProductCard 
                                    key={ product.id }
                                    name={ product.name } 
                                    details={ product.details } 
                                    />
                      ))}
          {/* <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 2"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 2</h3>
              <p className="store-address">456 Elm St, Town</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div> */}
        
        </div>
      </div>
      <div className="sub-sectionLocation">
        
        <div className="store-cards">
        <h2>Restaurant in your location</h2>
        {productDetails.map((product) => (
                
                <ProductCard 
                                    key={ product.id }
                                    name={ product.name } 
                                    details={ product.details } 
                                    />
                      ))}
          {/* <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 2"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 2</h3>
              <p className="store-address">456 Elm St, Town</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div>
          <div className="store-card">
            <div className="store-image">
              <img src={ramenImage} alt="Store 1"/>
            </div>
            <div className="store-details">
              <h3 className="store-name">Store Name 1</h3>
              <p className="store-address">123 Main St, City</p>
              <button className="store-button">Go</button>
            </div>
          </div> */}
        
        </div>
      </div> 
    </div>
  </div>
  );
}

export default location;
