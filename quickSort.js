import { performance } from "perf_hooks"
import { generateRandomNumbers } from "./utils.js"


const quickSort = (originalList) => {
  const list = [...originalList]

  if (list.length < 2) {
    return list
  }

  const pivot = list[0]

  const smaller = list.filter((item) => item < pivot)
  const bigger = list.filter((item) => item > pivot)

  return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

const numberOfElements = 100; 
let arr = generateRandomNumbers(numberOfElements); // generate an array of random numbers
const start = performance.now(); // get the time before the algorithm starts 
quickSort(arr);
const end = performance.now(); // get the time after the algorithm ends
const difference = end - start; // calculate the time taken for the algorithm to run
console.log("It took: " + difference + " milliseconds");  // output the time taken
