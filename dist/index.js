"use strict";
function formatString(input, toUpper) {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
function concatenateArrays(...arrays) {
    let result = [];
    for (let i = 0; i < arrays.length; i++) {
        result = result.concat(arrays[i]);
    }
    return result;
}
console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [4], [5, 4, 4, 4, 4])); // Output: [1, 2, 3, 4, 5]
