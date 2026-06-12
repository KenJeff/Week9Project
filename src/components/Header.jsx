export default function Header({
  opportunities,
  filteredOpportunities,
  searchTerm,
  topCategory,
}) {
  return (
    <div className="container">
      <h1 className="mb-4">Volunteer Dashboard</h1>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <p className="text-muted mb-1">Displayed Opportunities</p>
              <h3 className="fw-bold">
                {filteredOpportunities.length}
                {searchTerm && (
                  <small className="text-muted fs-6">
                    {" "}
                    of {(opportunities || []).length}
                  </small>
                )}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <p className="text-muted mb-1">Most Popular Category</p>
              <h3 className="fw-bold">
                <span className="badge bg-primary">{topCategory}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
