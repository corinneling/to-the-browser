const makeSummary = function (summary) {
    let [user, meat, bun, condiments] = summary;
    let order = `Order: Costumer: ${user}, Dog: ${meat}, Bun: ${bun}, Condiments: ${condiments}.`;
    return order;
}

module.exports = makeSummary;