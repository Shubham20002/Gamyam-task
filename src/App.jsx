import { useState } from "react";
import { PRODUCT_LIST } from "./data/products";
import ProductTable from "./components/ProductTable";
import ProductCardView from "./components/ProductCardView";

export default function App() {
  const [products] = useState(PRODUCT_LIST);

  // "list"  "card"
  const [view, setView] = useState("list");

  const toggleView = () => {
    setView((prev) => (prev === "list" ? "card" : "list"));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Gamyam Product App</h1>

      <button
        onClick={toggleView}
        style={{
          padding: "10px 18px",
          cursor: "pointer",
          background: "#333",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          margin: "15px 0",
        }}
      >
        {view === "list" ? "Switch to Card View" : "Switch to List View"}
      </button>

      {view === "list" ? (
        <ProductTable products={products} />
      ) : (
        <ProductCardView products={products} />
      )}
    </div>
  );
}
