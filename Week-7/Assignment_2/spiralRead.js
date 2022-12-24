//Time Complexity  : O(n)
//Space Complexity : O(n)

function spiralRead(array) {
    const result = [];
    spiralCollect(array, 0, array.length - 1, 0, array[0].length - 1, result);
    return result;
}

function spiralCollect(array, startRow, endRow, startCol, endCol, result) {

    if (startRow > endRow || startCol > endCol) return;

    for (let col = startCol; col <= endCol; col++) {
        result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
        result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {

        if (startRow === endRow) break;
        result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row >= startRow + 1; row--) {

        if (startCol === endCol) break;
        result.push(array[row][startCol]);
    }

    spiralCollect(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}


let array =
    [
        [27, 12, 35, 26],
        [25, 21, 94, 11],
        [19, 96, 43, 56],
        [55, 36, 10, 18],
        [96, 83, 31, 94],
        [93, 11, 90, 16]
    ];

let result = spiralRead(array);

console.log(result);
