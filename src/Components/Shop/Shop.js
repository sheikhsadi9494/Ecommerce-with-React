import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const textCenter = {
        textAlign: 'center'
    }

    // console.log(cart);

    const handleAddToCart = (product) => {
        // console.log(product)
        const newProduct= [...cart, product]
        setCart(newProduct);
    };
    console.log(cart)


    return (
        <div className='shopContainer'>
            <div className='productContainer'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div style={textCenter} className='orderSummary'>
                <h2>Order Summary</h2>
                <h3>Selected Item: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;