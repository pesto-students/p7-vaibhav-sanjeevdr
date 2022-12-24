//Time Complexity  : O(n)
//Space Complexity : O(n)

function findPairForGivenDiffExist(arr, size, n) {

  let mpp = new Map();

  // Traverse the array
  for (let i = 0; i < size; i++) {

    // Update frequency
    // of arr[i]
    if (mpp.has(arr[i]))
      mpp.set(arr[i], mpp.get(arr[i]) + 1);
    else
      mpp.set(arr[i], 1)

    // Check if any element whose frequency
    // is greater than 1 exist or not for n == 0
    if (n == 0 && mpp.get(arr[i]) > 1)
      return 1;
  }

  // Check if difference is zero and
  // we are unable to find any duplicate or
  // element whose frequency is greater than 1
  // then no such pair found.
  if (n == 0)
    return 0;

  for (let i = 0; i < size; i++) {
    if (mpp.has(n + arr[i])) {
      return 1;
    }
  }
  return 0;
}

let arr = [1, 8, 30, 100, 40];
arr.sort((a, b) => a - b);

let size = arr.length;
let n = -60;

let result = findPairForGivenDiffExist(arr, size, n);

console.log(result);