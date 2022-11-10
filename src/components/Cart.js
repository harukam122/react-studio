export default function Cart(props) {
    return (
      <div className="cart">
        <h2 className="cart-title">My Cart</h2>
        <div>
            {Object.entries(props.cartItems).map((item) => 
            <p className="cart-item">{item[1]}x {item[0]}</p>)}
        </div>
        <p className="total-price">Total: ${props.totalPrice}</p>
      </div>
    );
}
