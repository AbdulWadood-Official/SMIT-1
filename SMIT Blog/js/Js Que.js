// Write a function named removeDuplicates that takes an array of strings and returns a new array with all duplicate elements removed. The order of elements should be maintained as in the original array.

// removeDuplicates(["apple", "banana", "apple", "orange", "banana"]); 
// ["apple", "banana", "orange"]

let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
// Output: ["apple", "mango", "orange"]

