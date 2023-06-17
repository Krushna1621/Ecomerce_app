import React from 'react';
import './ProductsList.css';

const ProductsList = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h4>{props.price}</h4>
      <img src={props.url} alt="" width={360} height={240} />
      <div className="card-item">
        <h2>Album {props.id}</h2>
        <div>
          <div className="body">
            <h5 className="title">{props.title}</h5>
            <div className="price-btn">
              <img className="img" src={props.url} alt="" />
              <p className="text">${props.price}</p>
            </div>
            <a href="xyz.com" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
