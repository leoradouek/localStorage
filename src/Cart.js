import "./Cart.css";

function Cart(props) {
  const { cart, handleAdd, handleDelete } = props;
  console.log(cart);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart &&
        cart.map(
          (item) =>
            item.quantity > 0 && (
              <div className="cart-item" key={item.id}>
                <p>
                  {item.quantity} {item.name}
                </p>

                <button
                  className="cart-remove-quantity"
                  onClick={() => handleAdd(item.id)}
                >
                  +1
                </button>
                <button
                  className="cart-remove-quantity"
                  onClick={() => handleDelete(item.id)}
                >
                  -1
                </button>
              </div>
            )
        )}
    </div>
  );
}

export default Cart;
