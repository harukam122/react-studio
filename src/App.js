import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState({});

  return (
    <div className="App">
      <h1 className="title">🍰 Haruka's Bakery 🍰</h1>
      <div className="bakery-container">
        <div className="items-container">
          {bakeryData.map((item) => (
            <BakeryItem item={item} totalPrice={totalPrice} cartItems={cartItems} 
            setTotalPrice={setTotalPrice} setCartItems={setCartItems}></BakeryItem>
          ))}
        </div>

        <div className="cart-container">
          <Cart totalPrice={totalPrice} cartItems={cartItems}></Cart>      
        </div>
      </div>
    </div>
  );
}

export default App;
