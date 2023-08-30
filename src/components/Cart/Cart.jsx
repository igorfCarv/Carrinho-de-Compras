import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart(){
  const { cartItens, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItens.reduce((acc,item) => {
    return item.price + acc;
  } , 0);

  return(
    <section className={`cart ${isCartVisible ? 'cart--active':''}`}>
      <div className="cart_itens">
        { cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>
      <div className="cart_resume">Total: {formatCurrency(totalPrice/100,'BRL')}</div>
    </section>
  );
}

export default Cart;