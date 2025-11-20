
import { useState } from "react";
import { PRODUCT_LIST } from "./data/products";
import ProductTable from "./components/ProductTable";

export default function App() {
  const [products] = useState(PRODUCT_LIST);
  return (
    <div className="app">
      <header className="header">
        <h1>Gamyam — Product Assessment</h1>
      </header>

      <main>
        <p>Total Products Loaded: {products.length}</p>
        <ProductTable products={products} />
      </main>
    </div>
  );
}
