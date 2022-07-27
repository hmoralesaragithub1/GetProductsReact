import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};

export default Product;
