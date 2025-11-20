import { useState } from "react";
import { PRODUCT_LIST } from "./data/products";
import ProductTable from "./components/ProductTable";
import ProductCardView from "./components/ProductCardView";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [products] = useState(PRODUCT_LIST);

  const [view, setView] = useState("list");
  const [searchText, setSearchText] = useState("");

  const toggleView = () => {
    setView((prev) => (prev === "list" ? "card" : "list"));
  };

  // Filter logic
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Gamyam Product App</h1>

      {/* Search */}
      <SearchBar onSearch={setSearchText} />

      {/* Toggle Button */}
      <button
        onClick={toggleView}
        style={{
          padding: "10px 18px",
          cursor: "pointer",
          background: "#333",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          margin: "10px 0",
        }}
      >
        {view === "list" ? "Switch to Card View" : "Switch to List View"}
      </button>

      {/* Showing filtered count */}
      <p style={{ margin: "10px 0" }}>
        Showing {filteredProducts.length} products
      </p>

      {view === "list" ? (
        <ProductTable products={filteredProducts} />
      ) : (
        <ProductCardView products={filteredProducts} />
      )}
    </div>
  );
}
