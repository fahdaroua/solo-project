import React from 'react'

const ProductDetails = ({productDetails}) => {
 
      return (
        <div className="product-details">
          <div className="product-image">
            <img src={productDetails.imageUrl} />
          </div>
          <div className="product-info">
            <h1>{productDetails.name}</h1>
            <p>{productDetails.description}</p>
            <h2>Rating : {productDetails.Rating}</h2>
          
          </div>
        </div>
      );
}

export default ProductDetails