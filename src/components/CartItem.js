import React from 'react';
import { useGlobalContext } from '../context/context';

function CartItem({id,img,title,price,amount}) {
    const {remove,toggleAmount} = useGlobalContext();
  return (
      <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
          <h4>{title}</h4>
          <h4>TK. {price}</h4>
          <button className='remove-btn' onClick={()=>remove(id)}>remove</button>
      </div>
      <div style={{display:"flex"}}>
    <button className='amount-btn' onClick={()=>toggleAmount(id,"dec")}><p style={{fontSize:"20px"}}>-</p></button>
    <p className='amount'>{amount}</p>
    <button className='amount-btn' onClick={()=>toggleAmount(id,"inc")}><p style={{fontSize:"20px"}}>+</p></button>

      </div>

      </article>
  );
}

export default CartItem;
