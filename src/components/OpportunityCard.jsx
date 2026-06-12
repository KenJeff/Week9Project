export default function OpportunityCard({
  title,
  orgName,
  description,
  activities,
  dates,
  remote,
}) {
  // Guard against null or empty activities
  const safeActivities = activities || [];

  //   const categoryCounts = safeActivities.reduce((acc, activity) => {
  //     acc[activity.category] = (acc[activity.category] || 0) + 1;
  //     return acc;
  //   }, {});

  //   const topCategory =
  //     Object.keys(categoryCounts).length > 0
  //       ? Object.keys(categoryCounts).reduce((a, b) =>
  //           categoryCounts[a] > categoryCounts[b] ? a : b,
  //         )
  //       : null;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-0 fw-bold">{title}</h4>
            <small className="text-muted">{orgName}</small>
          </div>
          <span className={`badge ${remote ? "bg-success" : "bg-secondary"}`}>
            {remote ? "Remote" : "On-site"}
          </span>
        </div>

        <div className="card-body">
          <p className="card-text">{description}</p>
          {/* 
          {topCategory && (
            <div className="alert alert-info d-flex justify-content-between align-items-center py-2">
              <span className="text-muted" style={{ fontSize: "0.875rem" }}>
                Most common category
              </span>
              <span className="badge bg-primary">
                {topCategory} ({categoryCounts[topCategory]})
              </span>
            </div>
          )} */}

          <h6 className="fw-bold mb-3">Available Activities</h6>

          {safeActivities.length === 0 ? (
            <p className="text-muted">
              No activities listed for this opportunity.
            </p>
          ) : (
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {safeActivities.map((activity) => (
                  <tr key={activity.name}>
                    <td>{activity.name}</td>
                    <td>
                      <span className={`badge bg-primary`}>
                        {activity.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="card-footer text-muted text-end">
          <small>Dates: {dates}</small>
        </div>
      </div>
    </div>
  );
}
