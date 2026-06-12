export function getAllCategories(opportunities) {
    if (!opportunities) return [];
    return opportunities.flatMap((opp) =>
        opp.activities.map((activity) => activity.category)
    );
}

export function getCategoryCounts(opportunities) {
    const allCategories = getAllCategories(opportunities);
    return allCategories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
}

export function getTopCategory(opportunities) {
    const categoryCounts = getCategoryCounts(opportunities);
    if (Object.keys(categoryCounts).length === 0) return "N/A";
    return Object.keys(categoryCounts).reduce((a, b) =>
        categoryCounts[a] > categoryCounts[b] ? a : b
    );
}