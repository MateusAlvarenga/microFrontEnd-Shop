import styles from "./App.module.css"

function App() {

  window.addEventListener('message', (event) => {
    let response = JSON.parse(event.data)

    switch (response.type) {
      case "DISPATCH_SHOP_ADD_CART":

        const DISPATCH_CART_ADD_CART = JSON.stringify({
          type: 'DISPATCH_CART_ADD_CART',
          payload: response.payload
        });
        document.getElementById("cart").contentWindow.postMessage(DISPATCH_CART_ADD_CART, '*');
        return

      default:
        console.log("unidentifiable")
        return;
    }

    return;

  });


  return (
    <div className={styles.App}>

      <iframe id="cart" title="cart" className={styles.cart} src="http://localhost:3002/" ></iframe>
      <iframe id="products" title="products" className={styles.products} src="http://localhost:3003/" ></iframe>

    </div>
  );
}

export default App;
