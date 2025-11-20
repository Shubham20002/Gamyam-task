
import { useState, useEffect } from "react";
import { PRODUCT_LIST } from "./data/products";
import ProductTable from "./components/ProductTable";
import ProductCardView from "./components/ProductCardView";
import SearchBar from "./components/SearchBar";
import ProductForm from "./components/ProductForm";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState(PRODUCT_LIST);

  const [view, setView] = useState("list"); // list | card
  const [searchText, setSearchText] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Toggle between views
  const toggleView = () => {
    setView((prev) => (prev === "list" ? "card" : "list"));
  };

  // Filter based on search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset pagination whenever search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  // SAVE (Add / Update)
  const handleSave = (data) => {
    if (editingProduct) {
      // update an existing product
      setProducts((prev) =>
        prev.map((item) => (item.id === editingProduct.id ? data : item))
      );
    } else {
      // add new product
      setProducts((prev) => [
        ...prev,
        {
          ...data,
          id: prev.length + 1,
          isActive: true,
          createdAt: new Date().toISOString(),
        },
      ]);
    }

    setShowForm(false);
    setEditingProduct(null);
  };

  // Edit handler
  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Gamyam Product App</h1>

      {/* SEARCH */}
      <SearchBar onSearch={setSearchText} />

      {/* ADD PRODUCT BUTTON */}
      <button
        onClick={() => {
          setEditingProduct(null);
          setShowForm(true);
        }}
        style={{
          padding: "10px 16px",
          background: "green",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Add Product
      </button>

      {/* TOGGLE BUTTON */}
      <button
        onClick={toggleView}
        style={{
          padding: "10px 16px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        {view === "list" ? "Switch to Card View" : "Switch to List View"}
      </button>

      {/* ADD / EDIT FORM */}
      {showForm ? (
        <ProductForm
          editingProduct={editingProduct}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      ) : (
        <>
          {/* PRODUCT VIEWS */}
          {view === "list" ? (
            <ProductTable
              products={paginatedProducts}
              onEdit={handleEdit}
            />
          ) : (
            <ProductCardView
              products={paginatedProducts}
              onEdit={handleEdit}
            />
          )}

          {/* PAGINATION */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
