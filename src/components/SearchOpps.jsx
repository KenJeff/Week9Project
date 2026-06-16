import { C } from "../assets/styles/theme.js";

export default function SearchOpps({ searchTerm, onSearch }) {
  return (
    <div className="container" style={{ marginBottom: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: C.surface,
          border: `0.5px solid ${C.c2}`,
          borderRadius: "8px",
          padding: ".5rem 1rem",
          gap: "8px",
        }}
      >
        <i
          className="ti ti-search"
          style={{ color: C.muted, fontSize: "16px" }}
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Search opportunities by title..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: C.text,
            fontSize: "13px",
            flex: 1,
          }}
        />
        {searchTerm && (
          <button
            onClick={() => onSearch("")}
            style={{
              background: "transparent",
              border: `0.5px solid ${C.c3}`,
              color: C.muted,
              fontSize: "12px",
              padding: "3px 10px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
