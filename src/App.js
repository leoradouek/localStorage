import "./App.css";
import { useState } from "react";
import Groceries from "./Groceries";
import Cart from "./Cart";

const groceries = [
  { id: 1, name: "apple", cost: 99 },
  { id: 2, name: "orange", cost: 101 },
  { id: 3, name: "bread", cost: 145 },
  { id: 4, name: "milk", cost: 123 },
  { id: 5, name: "eggs", cost: 189 },
];

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  const handleAdd = (idx) => {
    let newItem = {};
    for (let grocery of groceries) {
      if (grocery.id === idx) {
        newItem.id = idx;
        newItem.name = grocery.name;
        newItem.quantity = 1;
      }
    }

    let currentCart = JSON.parse(localStorage.getItem("cart"));
    if (!currentCart) {
      currentCart = [];
      currentCart.push(newItem);
      setCart(currentCart);
      return localStorage.setItem("cart", JSON.stringify(currentCart));
    }

    for (let item of currentCart) {
      if (item.id === newItem.id) {
        item.quantity += 1;
        setCart(currentCart);
        return localStorage.setItem("cart", JSON.stringify(currentCart));
      }
    }

    currentCart.push(newItem);
    setCart(currentCart);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  const handleDelete = (idx) => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));

    const updated = currentCart.map((item) => {
      if (item.id === idx) {
        item.quantity -= 1;
      }
      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  console.log("cart in app", cart);
  return (
    <div className="App">
      <Groceries
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        groceries={groceries}
      />

      <Cart cart={cart} handleDelete={handleDelete} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
