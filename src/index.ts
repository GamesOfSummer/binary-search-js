import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function binarySearch(array: number[], numberToFind: number) {
    let numberFound = false;
    while (numberFound === false) {
        let halfWayPointArrayIndex = Math.floor(array.length / 2);
        let halfWayPoint = array[halfWayPointArrayIndex];

        if (halfWayPoint !== numberToFind) {
            if (halfWayPoint < halfWayPointArrayIndex) {
                array = array.slice(0, halfWayPoint);
            } else {
                array = array.slice(halfWayPoint, array.length);
            }
        } else {
            numberFound = true;
        }
    }

    return 0;
}

consoleStart();

validateFxn(binarySearch([1, 2, 3, 4, 5], 3), 3);

consoleEnd();
consoleBuffer();

export {};
