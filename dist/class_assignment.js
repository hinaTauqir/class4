"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr1 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] / 2) {
        console.log(`${arr1[i]} is even number`);
        sum = sum + arr1[i];
    }
    else {
        console.log(`${arr1[i]} is odd number`);
        sum = sum + arr1[i];
    }
}
