let menu = require('./dog.json');

const slc = {
     dogsFor: function (location) {
        if (location == "Dayton") {
            return menu.dy.dog;
        } else if (location == "San Diego") {
            return menu.sd.dog;
        } else {
            return menu.ny.dog;
        }
    },
    bunsFor: function (location) {
        if (location == "Dayton") {
            return menu.dy.bun;
        } else if (location == "San Diego") {
            return menu.sd.bun;
        } else {
            return menu.ny.bun;
        }
    }
}
// const dogsFor = function (location) {
//     if (location == "Dayton") {
//         return menu.dy.dog;
//     } else if (location == "San Diego") {
//         return menu.sd.dog;
//     } else {
//         return menu.ny.dog;
//     }
// }

module.exports = slc;