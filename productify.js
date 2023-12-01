// write a function that takes an array of numbers and returns an array where each number is the product of all the other numbers

// ie. productify([1,2,3,4])
// => [24, 12, 8, 6]

// const productify = (arr) => {

//     let result = [];

//     for (let  i = 0; i<arr.length; i++) {
//         let runningProduct = 1;
//         for (let j = 0; j<arr.length; j++) {
//             let num2 = arr[j];
//             if (j !== i) {
//                 runningProduct *= num2;
//             }
//         }
//         result[i] = runningProduct;
//     }
//     return result;
// }


const productify = (arr) => {

    let product = 1;
    let result = [];
    for (let i = 0; i<arr.length; i++) {
        let num = arr[i];
        result[i] = product * num;
        product *= num;
    }
    // 1, 2, 6, 24
    let product2 = 1;
    for (let j = result.length-2; j>=0; j--) {
        result[j+1] = arr[j+1] * product2;
        product2 = product2 * arr[j+1]
    
    }
   
    console.log(result)
}

// const productify = (arr) => {
//     const n = arr.length;

//     // Arrays to store products to the left and right of each index
//     const productsToLeft = new Array(n).fill(1);
//     const productsToRight = new Array(n).fill(1);

//     // Calculate products to the left of each index
//     let productToLeft = 1;
//     for (let i = 1; i < n; i++) {
//         productsToLeft[i] = productToLeft * arr[i - 1];
//         productToLeft *= arr[i - 1];
//     }

//     // Calculate products to the right of each index
//     let productToRight = 1;
//     for (let i = n - 2; i >= 0; i--) {
//         productsToRight[i] = productToRight * arr[i + 1];
//         productToRight *= arr[i + 1];
//     }

//     // Calculate the final product array
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         result[i] = productsToLeft[i] * productsToRight[i];
//     }

//     return result;
// };


let answer = productify([1,2,3,4])
console.log(answer);
// should be => [24, 12, 8, 6]