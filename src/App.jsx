
import { useState } from "react";
import { PRODUCT_LIST } from "./data/products";

export default function App() {
  const [products] = useState(PRODUCT_LIST);
  return (
    <div className="app">
      <header className="header">
        <h1>Gamyam — Product Assessment</h1>
      </header>

      <main>
        <p>Total Products Loaded: {products.length}</p>
      </main>
    </div>
  );
}
