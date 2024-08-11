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

// const str = "Hey, Wlecome to world of    programming!"
// console.log(str);
// 1st Method;
// const words = str.split(' ')
// console.log(words.length);

// 2nd Method:
// const mywords = str.trim().split(new RegExp("\\s+"))
// console.log(mywords.length);



// 12. *Remove All Instances*:
//     Remove all occurrences of a specified substring from a string.
// Step 1: Prompt the user for the original string
// let originalString = prompt("Enter the original string:");

// // Step 2: Prompt the user for the substring to remove
// let substringToRemove = prompt("Enter the substring to remove:");

// // Step 3: Initialize an empty string to store the result
// let resultString = "";

// // Step 4: Loop through each character of the original string
// for (let i = 0; i < originalString.length; i++) {
//     // Step 4a: Get the current part of the string to check if it matches the substring to remove
//     let partToCheck = originalString.substring(i, i + substringToRemove.length);

//     // Step 4b: Check if the current part matches the substring to remove
//     if (partToCheck === substringToRemove) {
//         // If it matches, skip over this part and continue to the next part
//         i += substringToRemove.length - 1;
//     } else {
//         // If it doesn't match, add this character to the result string
//         resultString += originalString[i];
//     }
// }

// // Step 5: Print the original string and the result string
// console.log("Original string:", originalString);
// console.log("String after removing all occurrences of '", substringToRemove, "':", resultString);


// 13. *Extract Numbers*:
//     Extract all numbers from a given alphanumeric string.

// let str = prompt("Enter the string with numbers: ");
// console.log(`Original string: ${str}`);
// str = str.replace(/\d/g,'')
// console.log(`Replaced string: ${str}`);


// 14. *Title Case Conversion*:
//     Convert a given string to title case (capitalize the first letter of each word).

// Prompt the user to enter a string
// let str = prompt("Enter the string:");
// console.log("Original string:", str);

// Convert the first character to uppercase
// let titleCaseStr = str[0].toUpperCase();

// Iterate through the string starting from the second character
// let i = 1;
// while (i < str.length) {
    // If the previous character is a space, convert the current character to uppercase
    // if (str[i - 1] === " ") {
    //     titleCaseStr += str[i].toUpperCase();
    // } else {
        // Otherwise, keep the current character as is
//         titleCaseStr += str[i];
//    }
     // Move to the next character
//     i++;
// }

// console.log("String in title case:", titleCaseStr);



// 15. *Unique Characters*:
//     Check if a string has all unique characters.

// Define a function to check if a string has all unique characters
// function hasUniqueCharacters(str) {
//     // Loop through each character in the string
//     for (let i = 0; i < str.length; i++) {
//         // Check if the current character repeats anywhere else in the string
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 // If the character repeats, return false
//                 return false;
//             }
//         }
//     }
//     // If no repeating characters are found, return true
//     return true;
// }

// // Prompt the user to enter a string
// let inputString = prompt("Enter a string:");
// console.log(inputString);

// // Call the function and store the result
// let isUnique = hasUniqueCharacters(inputString);

// // Print the result
// if (isUnique) {
//     console.log("The string has all unique characters.");
// } else {
//     console.log("The string does not have all unique characters.");
// }
// Allah asani 






