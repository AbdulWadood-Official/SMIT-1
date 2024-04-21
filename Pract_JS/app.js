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
// let remove_space = " Welcome to Javascript Programming "
// console.log(remove_space.trim());

// 8. *Count Vowels and Consonants*:
//     Count the number of vowels and consonants in a given string.
// let string = prompt("Enter the string!");
// let count = 0;
// for (let i=0;i<string.length; i++){
//     let letter=string[i].toLowerCase();
//     if (letter=="a" || letter=="e" ||letter=="i"||letter=="o"||letter=="u"){
//         count++;
//         }
//     }

// document.write("Vowels:", count,","," Consonant:", (string.length-count));
// document.write("<br>String is: ","("+string+")");

// 9. *Substring Extraction with Index*:
//     Extract a substring from a given string starting from a specified index up to the end of the string.
// var extract_str = "Javascript is versatile and popular language"
// console.log(extract_str);
// console.log(extract_str.substring(10));
// console.log(extract_str.substring(0,11));



// 10. *Remove Duplicates*:
//     Remove duplicate characters from a string.
// let str = prompt("Enter the string to remove duplicate chr")
// console.log(str);
// let set = new Set();
// let words = str.toLowerCase().split(" ")
// words.forEach(ele => {
//     set.add(ele)
// })
// console.log(set);

// *****************Another Approach ***********************
// let str = prompt("Enter the string to remove duplicate characters");
// console.log(str);
// Initialize an empty Set to store unique characters
// let uniqueChars = new Set();

// Iterate over each character in the string
// for (let char of str) {
    // Add each character to the Set
    // uniqueChars.add(char.toLowerCase());
// }

// Convert Set back to a string (removes duplicates)
// let result = Array.from(uniqueChars).join("");

// console.log("String without duplicate characters:", result);


// 11. *Word Count in String*:
//     Count the number of words in a given string.









