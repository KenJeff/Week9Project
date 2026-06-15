export default function OpportunityCard({
  title,
  orgName,
  description,
  activities,
  dates,
  remote,
  url,
}) {
  // Guard against null or empty activities
  const safeActivities = activities || [];

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
          <a className="card-text mb-4">{url}</a>

          <h6 className="fw-bold mb-3 mt-4">Available Activities</h6>

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
