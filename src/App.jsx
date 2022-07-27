import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListProduct from "./components/ListProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const load_products = await fetch("https://fakestoreapi.com/products");
    const data = await load_products.json();

    console.log("products", data);
    setProducts(data);
  };

  return (
    <div className="App">
      <h2>Lista de productos</h2>
      <ListProduct products={products} />
    </div>
  );
}

export default App;
