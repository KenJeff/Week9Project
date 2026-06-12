import { useState } from "react";

export default function AddOppForm() {
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [opportunities, setOpportunities] = useState([]);

  function saveOpportunity() {
    const newOpportunity = {
      title,
      organization,
      description,
      category,
      dates: { startDate, endDate },
    };

    const updated = [...opportunities, newOpportunity];
    setOpportunities(updated);
    localStorage.setItem("opportunities", JSON.stringify(updated));

    console.log("Saved:", newOpportunity);
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header">
          <h4 className="mb-0 fw-bold">Create An Opportunity</h4>
          <small className="text-muted">
            Fill out the form below to add a new volunteer opportunity
          </small>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter opportunity title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Organization</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter organization name"
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Describe the opportunity"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Dates</label>
            <div className="d-flex gap-3 align-items-center">
              <div className="flex-grow-1">
                <label
                  className="form-label text-muted"
                  style={{ fontSize: "0.85rem" }}
                >
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <span className="mt-3 text-muted">→</span>
              <div className="flex-grow-1">
                <label
                  className="form-label text-muted"
                  style={{ fontSize: "0.85rem" }}
                >
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="card-footer d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
          <button
            onClick={saveOpportunity}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
