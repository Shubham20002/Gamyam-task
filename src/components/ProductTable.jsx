

export default function ProductTable({ products,onEdit }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Products (List View)</h2>

      <table
        style={{
          width: "100%",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{p.name}</td>
              <td style={tdStyle}>₹{p.price}</td>
              <td style={tdStyle}>{p.category}</td>
              <td style={tdStyle}>{p.stock}</td>
              <td style={tdStyle}>
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
              </td>
              <td style={tdStyle}>
                <button
                  onClick={() => onEdit(p)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: "1px solid #aaa",
                    cursor: "pointer",
                    background: "#f5f5f5",
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "2px solid #ccc",
};

const tdStyle = {
  padding: "10px",
};
