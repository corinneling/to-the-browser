const controlDisable = function(item, action) {
    if(action == false) {
        return item.setAttribute('disabled', true);
    } else if(action == true) {
        return item.removeAttribute('disabled', true);
    }
}

module.exports = controlDisable;