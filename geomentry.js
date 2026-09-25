function calcOffSet(windowlength, rectLength) {
    return (windowlength - rectLength) / 2;
}

function distance(x1, y1, x2, y2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

module.exports = {
    calcOffSet,
    distance,
}
