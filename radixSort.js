/**
 * Let there be d digits in input integers. Radix Sort takes O(d*(n+b)) time where b is the base for representing numbers,
 * for example, for the decimal system, b is 10. What is the value of d?
 * If k is the maximum possible value, then d would be O(logb(k)). 
 * So overall time complexity is O((n+b) * logb(k))
 */

import { performance } from "perf_hooks";
import { generateRandomNumbers } from "./utils.js";

// Javascript implementation of Counting Sort
function getMax(arr) {
  let max = arr[0];
  for (let elm of arr) {
    if (elm > max) {
      max = elm;
    }
  }
  return max;
}

function countSort(arr, n, exp) {
  let output = new Array(n); // output array
  let i;
  let count = new Array(10);
  for (let i = 0; i < 10; i++)
    count[i] = 0;

  // Store count of occurrences in count[]
  for (i = 0; i < n; i++)
    count[Math.floor(arr[i] / exp) % 10]++;

  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for (i = 1; i < 10; i++)
    count[i] += count[i - 1];

  // Build the output array
  for (i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // Copy the output array to arr[], so that arr[] now
  // contains sorted numbers according to current digit
  for (i = 0; i < n; i++)
    arr[i] = output[i];
  return arr;
}

function radixSort(arr, n) {
  let max = getMax(arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(arr, n, exp);
  }
}

const numberOfElements = 100;
let arr = generateRandomNumbers(numberOfElements);
console.log(arr);
const start = performance.now();
radixSort(arr, arr.length);
const end = performance.now();
console.log(arr);
console.log(`It took ${end - start} milliseconds to complete`);
