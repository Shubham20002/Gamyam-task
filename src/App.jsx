import { useState } from "react";
import { PRODUCT_LIST } from "./data/products";
import ProductTable from "./components/ProductTable";
import ProductCardView from "./components/ProductCardView";
import SearchBar from "./components/SearchBar";
import ProductForm from "./components/ProductForm";

export default function App() {
  const [products, setProducts] = useState(PRODUCT_LIST);
  const [view, setView] = useState("list");
  const [searchText, setSearchText] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const toggleView = () => {
    setView((prev) => (prev === "list" ? "card" : "list"));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSave = (data) => {
    if (editingProduct) {
      // update
      setProducts((prev) =>
        prev.map((item) => (item.id === editingProduct.id ? data : item))
      );
    } else {
      // add new
      setProducts((prev) => [
        ...prev,
        { ...data, id: prev.length + 1, isActive: true },
      ]);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Gamyam Product App</h1>

      <SearchBar onSearch={setSearchText} />

      <button
        onClick={() => {
          setEditingProduct(null);
          setShowForm(true);
        }}
        style={{
          padding: "10px 18px",
          background: "#008000",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Add Product
      </button>

      <button
        onClick={toggleView}
        style={{
          padding: "10px 18px",
          marginLeft: "10px",
          cursor: "pointer",
          background: "#333",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
        }}
      >
        {view === "list" ? "Switch to Card View" : "Switch to List View"}
      </button>

      {showForm ? (
        <ProductForm
          editingProduct={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      ) : view === "list" ? (
        <ProductTable products={filteredProducts} onEdit={handleEdit} />
      ) : (
        <ProductCardView products={filteredProducts} onEdit={handleEdit} />
      )}
    </div>
  );
}
