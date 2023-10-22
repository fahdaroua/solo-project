import React,{useEffect,useState} from 'react';
import axios from 'axios';
const CartList = () => {
  const [cartData,setCartData] = useState([])
  const [render,setRerender] = useState(false)
  const handleDelete = (id)=> {
    axios.delete(`http://localhost:5000/api/cart/${id}`)
    .then(({data})=>{
      console.log(data)
      setRerender(!render)
    })
    .catch ((error)=>{
      console.log(error)
    })
  }
  const handleResetCart = ()=> {
    axios.delete(`http://localhost:5000/api/carts/deleteAll`)
    .then(({data})=>{
      console.log(data)
      alert("thanks for purchasing")
      setRerender(!render)

    })
    .catch ((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:5000/api/cart")
    .then(({data})=>{
      setCartData(data)
    })
    .catch(error => console.log(error))
  },[render])
  return (
    <div className='cart-list'>
  <h1>My cart</h1>
  {cartData.map((e,index)=>{
    return (
<div className='cart-item'>
    <span>Product Name: {e.name}</span>
    <span>Rating: {e.Rating}$</span>
    <button className='cart-list-button' onClick={()=>handleDelete(e._id)}>Remove</button>
  </div>
    )
  })}
  
 
  
  <h3>Total: {cartData.reduce((acc,e)=>{
    return acc+e.Rating
  },0)}$</h3>
  <button onClick={handleResetCart}>checkout</button>
</div>
  )
}

export default CartList