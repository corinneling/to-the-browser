const showOrder = function (summary) {
    let [user, meat, bun, condiments] = summary;
    let order = 
    `CUSTOMER: ${user} <br>
    DOG: ${meat} <br>
    BUN: ${bun} <br> 
    CONDIMENTS: ${condiments}`;
    return order;
}

module.exports = showOrder;