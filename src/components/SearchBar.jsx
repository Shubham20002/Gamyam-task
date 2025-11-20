
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  // Debounce logic (500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(text);
    }, 500);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
