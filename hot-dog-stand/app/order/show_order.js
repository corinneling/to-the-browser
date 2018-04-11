/* 
For order functionality
When array of form values is passed 
Then returns a string literal summary of that order
*/

const showOrder = function (summary) {
    let order = "";
    for (let i in summary) {
        let object = summary[i];
        for (let key in object) {
            order += (`${key}: ${object[key]}<br>`);
        }
    }
    return order;
}

module.exports = showOrder;