import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function BakeryItem(props) {

    function addToCart(props) {
        props.setTotalPrice(props.totalPrice + props.item.price);
        if (props.item.name in props.cartItems) {
            props.setCartItems(props.cartItems);
            props.cartItems[props.item.name]++;
        } else {
            props.cartItems[props.item.name] = 1;
        };
    }

    return (
        <div className="bakery-item">
            <img className="item-img" src={props.item.image} alt="bakery-item-img"></img>
            <div className="item-info">
                <div>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                </div>
                <div className="price-action">
                    <p className="price">${props.item.price}</p>
                    <button className="add-to-cart" onClick={() => addToCart(props)}><AddShoppingCartIcon/>Add to Card</button>
                </div>
            </div>
        </div>
    )

}