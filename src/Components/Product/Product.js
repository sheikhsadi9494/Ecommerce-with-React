import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {img, name, price, ratings, seller} = product;


    return (
        <div className='card'>
            <div className='imgContainer'>
                <img src={img} alt="" />
            </div>
            <div className='body'>
                <h3>{name}</h3>
                <h4>Price:{price}</h4>
                <div className='subInfo'>
                    <p>Made By: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <div className='btnContainer'>
                    <button onClick={() => handleAddToCart(product)} className='btn'>Add to Cart <FontAwesomeIcon className='cartBtnIcon' icon={faCartShopping} /></button>
                </div>
        </div>
    );
};

export default Product;