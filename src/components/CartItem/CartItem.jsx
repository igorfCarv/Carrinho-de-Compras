import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem( { data }){

  const { id,thumbnail,title, price  } = data;
  const { cartItens, setCartItens } = useContext(AppContext);
  const handleRemoveItem = () =>{
    const updatedItens = cartItens.filter((item) => item.id != id);
    setCartItens(updatedItens);
  };
  return(
    <section className="cart_item">
      <img src={ thumbnail } alt="Imagem do Produto" className="cart_itens_image" />
      <div className="cart_item_content">
        <h3 className="cart_item_title">{title}</h3>
        <h3 className="cart_item_price">{formatCurrency(price/100,'BRL')}</h3>
        <button type="button" className="button_remove_item" onClick={ handleRemoveItem }><BsCartDashFill /></button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;