import { C } from "../assets/styles/theme.js";

export default function Header({
  opportunities,
  filteredOpportunities,
  searchTerm,
  topCategory,
}) {
  return (
    <div className="container">
      <h1 style={{ color: C.text, fontWeight: 500, marginBottom: "1.5rem" }}>
        Volunteer Dashboard
      </h1>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div
            style={{
              background: C.surface,
              border: `0.5px solid ${C.c2}`,
              borderRadius: "10px",
              padding: "1.25rem",
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: C.muted, fontSize: "13px", marginBottom: "6px" }}
            >
              Displayed Opportunities
            </p>
            <h3 style={{ color: C.text, fontWeight: 500, margin: 0 }}>
              {filteredOpportunities.length}
              {searchTerm && (
                <small style={{ color: C.muted, fontSize: "14px" }}>
                  {" "}
                  of {(opportunities || []).length}
                </small>
              )}
            </h3>
          </div>
        </div>

        <div className="col-md-6">
          <div
            style={{
              background: C.surface,
              border: `0.5px solid ${C.c2}`,
              borderRadius: "10px",
              padding: "1.25rem",
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: C.muted, fontSize: "13px", marginBottom: "6px" }}
            >
              Most Popular Category
            </p>
            <h3 style={{ margin: 0 }}>
              <span
                style={{
                  background: C.c1,
                  color: C.c4,
                  border: `1px solid ${C.c4}`,
                  fontSize: "13px",
                  padding: "4px 14px",
                  borderRadius: "999px",
                  fontWeight: 500,
                }}
              >
                {topCategory}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
