import { useState } from "react";

export default function MyOpps() {
  const [opportunities, setOpportunities] = useState(() => {
    const saved = localStorage.getItem("opportunities");
    return saved ? JSON.parse(saved) : [];
  });

  function deleteOpportunity(index) {
    const updated = opportunities.filter((_, i) => i !== index);
    setOpportunities(updated);
    localStorage.setItem("opportunities", JSON.stringify(updated));
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="text-center w-100">
            <h4 className="mb-0 fw-bold">My Opportunities</h4>
            <small className="text-muted">
              Your created volunteer opportunities
            </small>
          </div>
          {opportunities.length > 0 && (
            <span className="badge bg-primary">
              {opportunities.length} saved
            </span>
          )}
        </div>

        <div className="card-body">
          {opportunities.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted mb-0">No created opportunities yet.</p>
            </div>
          ) : (
            opportunities.map((opp, index) => (
              <div key={index} className="card shadow-sm mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold">{opp.title}</h5>
                  <div className="d-flex align-items-center gap-2">
                    {opp.category && (
                      <span className="badge bg-primary">{opp.category}</span>
                    )}
                    <span
                      className={`badge ${opp.remote ? "bg-success" : "bg-secondary"}`}
                    >
                      {opp.remote ? "Remote" : "On-site"}
                    </span>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteOpportunity(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  {opp.organization && (
                    <p className="text-muted mb-1">
                      <strong>Organization:</strong> {opp.organization}
                    </p>
                  )}
                  {opp.description && (
                    <p className="text-muted mb-1">
                      <strong>Description:</strong> {opp.description}
                    </p>
                  )}
                  {opp.dates && (
                    <p className="text-muted mb-0">
                      <strong>Dates:</strong> {opp.dates.startDate} →{" "}
                      {opp.dates.endDate}
                    </p>
                  )}
                  {!opp.dates?.startDate && !opp.dates?.endDate && (
                    <p className="text-muted mb-0">No dates provided.</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
