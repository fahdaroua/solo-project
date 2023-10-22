import React from 'react'
import axios from "axios"
const ProductCard = ({product ,switchView}) => {
  const handleSubmit = ()=> {
    axios.post("http://localhost:5000/api/cart",{
      name: product.name,
      ranking:product.ranking,
      productId : product._id,
      Genre : product.Genre,
    })
    .then(({data})=>{
      console.log("added", data)
    })
    .catch(error =>console.log(error))
  }
  return (
    <div className="product-card">
    <img src={product.imageUrl} alt="image" onClick={()=>switchView("details",product)}/>  
    <h2>{product.name}</h2>
    <p>{product.description.slice(0,32)} ...</p>
    <p className='card-item-price'>Rating: {product.Rating}</p>
    <p className='card-item-cat'>Genre: {product.Genre}</p>
    <div className="product-card-buttons">
        <button>Update Product</button>
        <button >Delete Product</button>
       
    </div>
</div>
  )
}

export default ProductCard
