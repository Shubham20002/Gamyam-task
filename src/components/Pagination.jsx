

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{
          padding: "6px 12px",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#f4f4f4",
        }}
      >
        Previous
      </button>

      <span>Page {currentPage} of {totalPages}</span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{
          padding: "6px 12px",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#f4f4f4",
        }}
      >
        Next
      </button>
    </div>
  );
}
