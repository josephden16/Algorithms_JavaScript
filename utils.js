export const generateRandomNumbers = (numberOfElements) => {
  // generate an array of random numbers
  // let arr = Array(numberOfElements).fill(null).map(() => Math.round(Math.random() * numberOfElements));
  let arr = Array(numberOfElements).fill(null).map((_, index) => index + 1);
  let n = arr.length;
  // use fisher-yates algorithm to shuffle the array
  for (let i = n - 1; i > 0; i--) {

    // Pick a random index from 0 to i inclusive
    let j = Math.floor(Math.random() * (i + 1));

    // Swap arr[i] with the element
    // at random index
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
