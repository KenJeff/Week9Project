import { useState } from "react";
import { C } from "../assets/styles/theme.js";

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", width: "100%" }}>
            <h4 style={{ color: C.text, fontWeight: 500, margin: 0 }}>
              My Opportunities
            </h4>
            <small style={{ color: C.muted }}>
              Your created volunteer opportunities
            </small>
          </div>
          {opportunities.length > 0 && (
            <span
              style={{
                background: C.c1,
                color: C.c4,
                border: `1px solid ${C.c4}`,
                fontSize: "11px",
                padding: "3px 10px",
                borderRadius: "999px",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {opportunities.length} saved
            </span>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "1rem" }}>
          {opportunities.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <p style={{ color: C.muted, margin: 0 }}>
                No created opportunities yet.
              </p>
            </div>
          ) : (
            opportunities.map((opp, index) => (
              <div
                key={index}
                style={{
                  background: C.surface2,
                  border: `0.5px solid ${C.c2}`,
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                {/* Opp card header */}
                <div
                  style={{
                    padding: ".75rem 1rem",
                    borderBottom: `0.5px solid ${C.c2}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5 style={{ color: C.text, fontWeight: 500, margin: 0 }}>
                    {opp.title}
                  </h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {opp.category && (
                      <span
                        style={{
                          background: C.c4,
                          color: C.c1,
                          fontSize: "11px",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          fontWeight: 500,
                        }}
                      >
                        {opp.category}
                      </span>
                    )}
                    <span
                      style={{
                        background: opp.remote ? C.c1 : C.c2,
                        color: opp.remote ? C.c4 : C.c5,
                        border: opp.remote
                          ? `1px solid ${C.c4}`
                          : `1px solid ${C.c3}`,
                        fontSize: "11px",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        fontWeight: 500,
                      }}
                    >
                      {opp.remote ? "Remote" : "On-site"}
                    </span>
                    <button
                      onClick={() => deleteOpportunity(index)}
                      style={{
                        background: "transparent",
                        border: `1px solid #f09595`,
                        color: "#f09595",
                        fontSize: "12px",
                        padding: "3px 10px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Opp card body */}
                <div style={{ padding: "1rem" }}>
                  {opp.organization && (
                    <p
                      style={{
                        color: C.muted,
                        fontSize: "13px",
                        marginBottom: "6px",
                      }}
                    >
                      <strong style={{ color: C.c5 }}>Organization:</strong>{" "}
                      {opp.organization}
                    </p>
                  )}
                  {opp.description && (
                    <p
                      style={{
                        color: C.muted,
                        fontSize: "13px",
                        marginBottom: "6px",
                      }}
                    >
                      <strong style={{ color: C.c5 }}>Description:</strong>{" "}
                      {opp.description}
                    </p>
                  )}
                  {opp.dates?.startDate || opp.dates?.endDate ? (
                    <p style={{ color: C.muted, fontSize: "13px", margin: 0 }}>
                      <strong style={{ color: C.c5 }}>Dates:</strong>{" "}
                      {opp.dates.startDate} → {opp.dates.endDate}
                    </p>
                  ) : (
                    <p style={{ color: C.muted, fontSize: "13px", margin: 0 }}>
                      No dates provided.
                    </p>
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
