

export default function ProductCardView({ products,onEdit }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Products (Card View)</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              background: "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>{p.name}</h3>

            <p style={{ margin: "4px 0" }}>
              <strong>Price:</strong> ₹{p.price}
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong>Category:</strong> {p.category}
            </p>

            <p style={{ margin: "4px 0" }}>
              <strong>Stock:</strong> {p.stock}
            </p>

            <span
              style={{
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "12px",
                background: p.isActive ? "#d4ffe0" : "#ffe0e0",
                color: p.isActive ? "green" : "red",
              }}
            >
              {p.isActive ? "Active" : "Inactive"}
            </span>
            <button
              onClick={() => onEdit(p)}
              style={{
                marginTop: "10px",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #aaa",
                cursor: "pointer",
                background: "#f5f5f5",
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
