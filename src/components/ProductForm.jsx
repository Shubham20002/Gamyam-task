
import { useState, useEffect } from "react";

export default function ProductForm({ onSave, editingProduct, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  // If editing, fill form
  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
        stock: editingProduct.stock || "",
        description: editingProduct.description || "",
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};

    if (!form.name.trim()) temp.name = "Name is required";
    if (!form.price) temp.price = "Price is required";
    if (!form.category.trim()) temp.category = "Category is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newData = {
      ...editingProduct,
      ...form,
      price: Number(form.price),
      stock: Number(form.stock || 0),
    };

    onSave(newData);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#fafafa",
      }}
    >
      <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>

      <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name *</label>
          <br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <p style={errStyle}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Price *</label>
          <br />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.price && <p style={errStyle}>{errors.price}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Category *</label>
          <br />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.category && <p style={errStyle}>{errors.category}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Stock</label>
          <br />
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Description</label>
          <br />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            style={{ ...inputStyle, resize: "none" }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            padding: "8px 14px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
          }}
        >
          {editingProduct ? "Update" : "Add"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: "8px 14px",
            marginLeft: "10px",
            borderRadius: "6px",
            border: "1px solid #aaa",
            background: "#f0f0f0",
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "250px",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const errStyle = {
  color: "red",
  fontSize: "12px",
  marginTop: "4px",
};
