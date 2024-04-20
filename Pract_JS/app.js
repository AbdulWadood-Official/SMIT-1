// Assignment:
// **************Q1. *String Length Calculation**********************:
//    Write a program to calculate the length of a given string.

// var fruit = ["Mango","Apple","Orange"];
// console.log(fruit.length);

// Q2. *String to Uppercase*:
//    Convert a string to uppercase.
// let text_uppercase = "javascript is case-sentitive"
// console.log(text_uppercase.toUpperCase());

// Q3. *String to Lowercase*:
//    Convert a string to lowercase.
// let text_lowercase = "Conversion To Lower";
// console.log(text_lowercase.toLowerCase());


// 4. *Count Specific Character*:
//    Count the occurrences of a specific character within a string.
var string = prompt("Enter the string: ");
var letter = prompt("Enter a letter:");
let strlen = string.length;

var counter = 0;
for (var i=0; i< strlen ; i++){
    if(string[i] == letter){
        counter++;
    }
}
document.write(`${string} => ${letter} => ${counter}`);

// Q5. *Substring Extraction*:
//    Write a program that extracts a substring from a given string using a start and end index provided by the user.


