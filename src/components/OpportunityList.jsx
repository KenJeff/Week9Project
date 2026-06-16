import { useState, useEffect } from "react";
import OpportunityCard from "./OpportunityCard";
import SearchOpps from "./SearchOpps";
import { getTopCategory } from "../lib/opportunityUtils";
import Header from "./Header";
import { C } from "../assets/styles/theme.js";

export default function OpportunityList() {
  const [opportunities, setOpportunities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchOpportunities() {
      try {
        const response = await fetch(
          `https://www.volunteerconnector.org/api/search/`,
        );
        if (!response.ok) throw new Error(`Failed to fetch opportunities`);
        const data = await response.json();
        setOpportunities(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchOpportunities();
  }, []);

  const filteredOpportunities = (opportunities || []).filter((opp) =>
    opp.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const topCategory = getTopCategory(opportunities);

  return (
    <div className="container mt-4">
      <Header
        topCategory={topCategory}
        opportunities={opportunities}
        filteredOpportunities={filteredOpportunities}
        searchTerm={searchTerm}
      />

      {loading && (
        <p style={{ color: C.muted, textAlign: "center", padding: "1rem" }}>
          Loading opportunities...
        </p>
      )}
      {error && (
        <p style={{ color: "#f09595", textAlign: "center", padding: "1rem" }}>
          Something went wrong: {error.message}
        </p>
      )}

      <SearchOpps searchTerm={searchTerm} onSearch={setSearchTerm} />

      {filteredOpportunities.length === 0 && !loading ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ color: C.muted }}>
            No opportunities found matching "{searchTerm}"
          </p>
        </div>
      ) : (
        filteredOpportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            title={opportunity.title}
            orgName={opportunity.organization?.name || opportunity.organization}
            description={opportunity.description}
            activities={opportunity.activities}
            dates={opportunity.dates}
            remote={opportunity["remote-or-online"]}
            url={opportunity.url}
          />
        ))
      )}
    </div>
  );
}
