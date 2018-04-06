const makeSummary = function (summary) {
    let [user, meat, bun, condiments] = summary;
    let order = `CUSTOMER: ${user}, DOG: ${meat}, BUN: ${bun}, CONDIMENTS: ${condiments}.`;
    return order;
}

module.exports = makeSummary;