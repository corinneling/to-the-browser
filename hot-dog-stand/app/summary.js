const makeSummary = function (summary) {
    let [meat, bun, condiments] = summary;
    let order = `Order: ${meat} dog, ${bun} bun, and ${condiments}.`;
    return order;
}

module.exports = makeSummary;