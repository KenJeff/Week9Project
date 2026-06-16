import { useState } from "react";
import { C } from "../assets/styles/theme.js";

const inputStyle = {
  width: "100%",
  background: C.surface2,
  border: `0.5px solid ${C.c2}`,
  borderRadius: "6px",
  padding: ".5rem .75rem",
  color: C.text,
  fontSize: "14px",
  outline: "none",
};

const labelStyle = {
  color: C.c5,
  fontSize: "13px",
  fontWeight: 500,
  marginBottom: "6px",
  display: "block",
};

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
      <div
        style={{
          background: C.surface,
          border: `0.5px solid ${C.c2}`,
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: C.surface2,
            padding: ".75rem 1rem",
            borderBottom: `0.5px solid ${C.c2}`,
          }}
        >
          <h4 style={{ color: C.text, fontWeight: 500, margin: 0 }}>
            Create An Opportunity
          </h4>
          <small style={{ color: C.muted }}>
            Fill out the form below to add a new volunteer opportunity
          </small>
        </div>

        {/* Body */}
        <div style={{ padding: "1.25rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Title</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Enter opportunity title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Organization</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Enter organization name"
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Description</label>
            <textarea
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              placeholder="Describe the opportunity"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Dates</label>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <label style={{ ...labelStyle, color: C.muted }}>
                  Start Date
                </label>
                <input
                  type="date"
                  style={inputStyle}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <span style={{ color: C.muted, marginTop: "1.2rem" }}>→</span>
              <div style={{ flex: 1 }}>
                <label style={{ ...labelStyle, color: C.muted }}>
                  End Date
                </label>
                <input
                  type="date"
                  style={inputStyle}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Category</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Enter category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: C.surface2,
            padding: ".75rem 1rem",
            borderTop: `0.5px solid ${C.c2}`,
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: `0.5px solid ${C.c3}`,
              color: C.muted,
              padding: ".4rem 1rem",
              borderRadius: "6px",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={saveOpportunity}
            style={{
              background: C.c1,
              border: `1px solid ${C.c4}`,
              color: C.c4,
              padding: ".4rem 1rem",
              borderRadius: "6px",
              fontSize: "13px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
