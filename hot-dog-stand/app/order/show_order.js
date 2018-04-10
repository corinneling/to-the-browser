/* 
For order functionality
When array of form values is passed 
Then returns a string literal summary of that order
*/
const showOrder = function (summary) {
    let [user, meat, bun, condiments] = summary;
    let orderNum = Math.floor(Math.random()*100);
    let order = 
    `CUSTOMER: ${user} <br>
    ORDER #: ${orderNum} <br>
    DOG: ${meat} <br>
    BUN: ${bun} <br> 
    CONDIMENTS: ${condiments}`;
    return order;
}

module.exports = showOrder;