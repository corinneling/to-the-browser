let menu = require('./menu.json');

const locationLogic = {
    dogsFor: function (location) {
        switch (location) {
            case "Dayton":
                return menu.dy.dog;
            case "San Diego":
                return menu.sd.dog;
            default:
                return menu.ny.dog;
        }
    },
    bunsFor: function (location) {
        switch (location) {
            case "Dayton":
                return menu.dy.bun;
            case "San Diego":
                return menu.sd.bun;
            default:
                return menu.ny.bun;
        }
    },
    condFor: function (location) {
        switch (location) {
            case "Dayton":
                return menu.dy.cond;
            case "San Diego":
                return menu.sd.cond;
            default:
                return menu.ny.cond;
        }
    }
}

module.exports = locationLogic;