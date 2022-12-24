//Time Complexity  : O(n)
//Space Complexity : O(1)

function kadanesAlgorithm(array) {
    let maxUpToHere = array[0];
    let maxTillNow = array[0];

    for (let i = 1; i < array.length; i++) {
        const number = array[i];
        maxUpToHere = Math.max(number, maxUpToHere + number);
        maxTillNow = Math.max(maxTillNow, maxUpToHere);
    }
    return maxTillNow;
}

let array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

let result = kadanesAlgorithm(array);

console.log(result);