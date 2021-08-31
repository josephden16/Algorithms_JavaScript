// Implementation of Bubble Sort Algorithm
// This algorithm runs in O(n^2) time (worst case scenario)

import { performance } from "perf_hooks";
import { generateRandomNumbers } from "./utils.js";


const bubbleSort = (array) => {
  let swapped = false;

  const arr = [...array];
  const arraySize = array.length;

  for (let i = 1; i < arraySize - 1; i++) {
    swapped = false;

    for (let j = 0; j < arraySize - i; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j+1]]; // swap the 2 elements
        swapped = true;
      }
    }

    if (!swapped) { // if no elements have been swapped an indication that the array is sorted then terminate
      return arr;
    }
  }

  return arr;
}


let numbers = generateRandomNumbers(100);
console.log(numbers);
const start = performance.now();
numbers = bubbleSort(numbers);
const end = performance.now();
console.log(numbers);
console.log("It took: " + (end - start) + " milliseconds");
