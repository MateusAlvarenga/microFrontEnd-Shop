import React, { useState } from "react";
import styles from "./Cart.module.css";




export default props => {

    window.addEventListener('message', (event) => {
        let response = JSON.parse(event.data)

        switch (response.type) {
            case "DISPATCH_CART_ADD_CART":
                setAmount(amount + response.payload.price)
                setQtd(qtd + 1)
                return
            default:
                console.log("unidentifiable")
                return;
        }
    })

    let [qtd, setQtd] = useState(0)
    let [amount, setAmount] = useState(0)

    return (
        <div className={styles.Cart}>
            <img width="60px" src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1636419299~hmac=d28ff89cbbbc297fe3774e19a8e912aa" alt="" />
            <div className={styles.numberCircle}>{qtd}</div>
            <strong>$$ {Math.round(amount * 100) / 100}</strong>
        </div >
    )

}
