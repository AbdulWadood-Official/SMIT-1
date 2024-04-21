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
// var string = prompt("Enter the string: ");
// var letter = prompt("Enter a letter:");
// let strlen = string.length;

// var counter = 0;
// for (var i=0; i< strlen ; i++){
//     if(string[i] == letter){
//         counter++;
//     }
// }
// document.write(`${string} => ${letter} => ${counter}`);

// Q5. *Substring Extraction*:
//    Write a program that extracts a substring from a given string using a start and end index provided by the user.
// var extract_str = "Javascript is versatile and popular language"
// console.log(extract_str);
// console.log(extract_str.substring(10));
// console.log(extract_str.substring(0,11));


// Q6. *Capitalize Each Word*:
//     Write a program to capitalize the first letter of each word in a given string.
// In this question we used 3 functions charAt(),toUpperCase(),slice()
// var string = prompt("Enter a string");
// console.log(string);
// var first_word = string.charAt(0);
// console.log(first_word);
// console.log(first_word.toUpperCase());
// var rem = string.slice(1);
// console.log(rem);
// var caps = first_word.toUpperCase() + rem;
// console.log(`${caps}`);


// Q7. *Trim Whitespace*:
//     Remove leading and trailing whitespaces from a string.
let remove_space = " Welcome to Javascript Programming "
console.log(remove_space.trim());

// 8. *Count Vowels and Consonants*:
//     Count the number of vowels and consonants in a given string.
