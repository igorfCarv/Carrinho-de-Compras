import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }){
  const { title, thumbnail, price } = data;
  const { cartItens, setCartItens} = useContext(AppContext);

  const handleAddCart = () => setCartItens([...cartItens,data]);
  
  return(
    <section className="product_card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="card_image" />
      
      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price/100, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>
      
      <button type="button" className="button_add_card" onClick={ handleAddCart }>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;