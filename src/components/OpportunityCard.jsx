import { useState } from "react";
import { C } from "../assets/styles/theme.js";

export default function OpportunityCard({
  title,
  orgName,
  description,
  activities,
  dates,
  remote,
  url,
}) {
  const [expanded, setExpanded] = useState(false);

  const CHAR_LIMIT = 150;
  const isLong = description && description.length > CHAR_LIMIT;
  const displayedDescription =
    isLong && !expanded
      ? description.slice(0, CHAR_LIMIT) + "..."
      : description;

  const safeActivities = activities || [];

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `0.5px solid ${C.c2}`,
          }}
        >
          <div>
            <h4 style={{ color: C.text, fontWeight: 500, marginBottom: 2 }}>
              {title}
            </h4>
            <small style={{ color: C.muted }}>{orgName}</small>
          </div>
          <span
            style={{
              fontSize: "11px",
              padding: "3px 10px",
              borderRadius: "999px",
              fontWeight: 500,
              background: remote ? C.c1 : C.c2,
              color: remote ? C.c4 : C.c5,
              border: `0.5px solid ${C.c4}`,
            }}
          >
            {remote ? "Remote" : "On-site"}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: "1rem" }}>
          <p
            style={{
              color: C.muted,
              fontSize: "13px",
              lineHeight: 1.6,
              marginBottom: ".75rem",
            }}
          >
            {displayedDescription}
            {isLong && (
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: C.c4,
                  fontSize: "12px",
                  cursor: "pointer",
                  padding: "0",
                  marginLeft: "4px",
                }}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </p>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: C.c4,
                fontSize: "13px",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              {url}
            </a>
          )}

          <h6
            style={{ color: C.text, fontWeight: 500, margin: "1rem 0 .5rem" }}
          >
            Available Activities
          </h6>

          {safeActivities.length === 0 ? (
            <p style={{ color: C.muted, fontSize: "13px" }}>
              No activities listed for this opportunity.
            </p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "16px",
              }}
            >
              <thead>
                <tr style={{ background: C.c1 }}>
                  <th
                    style={{
                      color: C.c5,
                      padding: "6px 10px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      color: C.c5,
                      padding: "6px 10px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {safeActivities.map((activity) => (
                  <tr
                    key={activity.name}
                    style={{ borderBottom: `0.5px solid ${C.c2}` }}
                  >
                    <td style={{ color: C.muted, padding: "6px 10px" }}>
                      {activity.name}
                    </td>
                    <td style={{ padding: "6px 10px" }}>
                      <span
                        style={{
                          fontSize: "14px",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          background: C.c4,
                          color: C.c1,
                          fontWeight: 500,
                        }}
                      >
                        {activity.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: ".5rem 1rem",
            background: C.surface2,
            borderTop: `0.5px solid ${C.c2}`,
            textAlign: "right",
          }}
        >
          <small style={{ color: C.muted, fontSize: "11px" }}>
            Dates: {dates}
          </small>
        </div>
      </div>
    </div>
  );
}
