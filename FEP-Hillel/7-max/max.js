// function max(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// function max(arr) {
//     return arr.sort((a, b) => a - b)[arr.length - 1];
// }

function max(arr) {
    if (arr.length === 1) {
        let result = arr[0];
        return result;
    }
    if (arr[0] > arr[arr.length - 1]) {
        arr.pop();
        return max(arr);
    }
    if (arr[0] < arr[arr.length - 1]) {
        arr.shift();
        return max(arr);
    }
}

console.log(max([8]), "one element test, must return 8");
console.log(max([1, 8, 37, 5, 17]), "5 elements test, must return 37");
console.log(max([8, 17]), "2 elements test, must return 17");
