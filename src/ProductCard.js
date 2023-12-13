import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt="Product image" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
