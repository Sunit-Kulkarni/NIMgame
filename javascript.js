//Defining global state variables
/*jslint devel: true */

var amountOfDots = 16;
var isPlayerOneTurn = true;

var dotHeap = [
    {
        name: "A",
        dots: "OOOOO"
    },
    {
        name: "B",
        dots: "OOOOO"
    },
    {
        name: "C",
        dots: "OOOOOO"
    }
];

//Defining Functions

function printHeap() {
    "use strict";
    console.log("Heap " + dotHeap.name + ": " + dotHeap.dots);
}

function printBoardGame() {
    "use strict";
}