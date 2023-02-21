"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function binarySearch(array, numberToFind) {
    var numberFound = false;
    while (numberFound === false) {
        var halfWayPointArrayIndex = Math.floor(array.length / 2);
        var halfWayPoint = array[halfWayPointArrayIndex];
        if (halfWayPoint !== numberToFind) {
            if (halfWayPoint < halfWayPointArrayIndex) {
                array = array.slice(0, halfWayPoint);
            }
            else {
                array = array.slice(halfWayPoint, array.length);
            }
        }
        else {
            numberFound = true;
        }
    }
    return 0;
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(binarySearch([1, 2, 3, 4, 5], 3), 3);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
