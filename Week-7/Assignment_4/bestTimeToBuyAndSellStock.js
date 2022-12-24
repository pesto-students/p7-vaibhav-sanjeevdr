//Time Complexity  : O(n)
//Space Complexity : O(1)

function bestProfitStock(array){
    let largestDiff = 0;
    let lowestStockPrice = Number.MAX_VALUE;

    for(let i = 0; i<array.length; i++){
        if(array[i]< lowestStockPrice){
            lowestStockPrice = array[i];
        }else{
            largestDiff = Math.max(largestDiff,array[i]-lowestStockPrice);
        }
    }

    return largestDiff;
}

let array =  [7,1,5,3,6,4];

let result = bestProfitStock(array);

console.log(result);