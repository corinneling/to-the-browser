/* 
For admin & order functionality
When a location is selected
Then renders form elements
*/
let areaBtns = null,
    bunTypes = null;

// removes all select elements
const clearElements = function (element) {
    for (let i = 0; i < element.length; i++) {
        element[i].remove();
    }
}

// renders appropriate selects based on location chosen
const elementsByArea = function (renderElement) {
    clearElements();
    if (areaBtns[0].checked) {
        renderElement('ny')
    } else if (areaBtns[1].checked) {
        renderElement('sd')
    } else {
        renderElement('dy')
    }
}

// listens to radio buttons 
const areaEvent = function () {
    areaBtns = document.querySelectorAll('input[type=radio]');
    areaBtns.forEach(function (e) {
        e.addEventListener('change', elementsByArea)
    })
}
module.exports = clearElements;