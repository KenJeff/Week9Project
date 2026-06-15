export default function SearchOpps({ searchTerm, onSearch }) {
  return (
    <div className=" container input-group mb-4">
      <span className="input-group-text">
        <i className="ti ti-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search opportunities by title..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchTerm && (
        <button
          className="btn btn-outline-secondary"
          onClick={() => onSearch("")}
        >
          Clear
        </button>
      )}
    </div>
  );
}
