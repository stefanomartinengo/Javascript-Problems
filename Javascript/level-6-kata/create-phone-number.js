/*
Create Phone Number:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parenthesis!
*/


function createPhoneNumber(arr){
  return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6, 10).join('')}`;
}
// Instead of Join on each ${}, you can join the entire array first into one string and replace slice with substring()
//////////////////////////////////

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
}