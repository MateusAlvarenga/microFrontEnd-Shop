import React from 'react';
import styles from "./Product.module.css"


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function dispatchToCart(product_dispatch) {
        const DISPATCH_SHOP_ADD_CART = JSON.stringify({
            type: 'DISPATCH_SHOP_ADD_CART',
            payload: product_dispatch
        });
        window.parent.postMessage(DISPATCH_SHOP_ADD_CART, '*');
    }

    return (
        <div className={styles.card}>
            <img alt={props.name} src={`https://source.unsplash.com/random/200x200?sig=${props.id}`} />
            <strong>{props.name}</strong>
            <strong>$$ {props.price}</strong>
            <button onClick={() => dispatchToCart(props)}>BUY</button>
        </div>
    )
}