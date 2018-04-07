// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !


function pigIt(str){
    var splitStr = str.split(' ')
  var arr = []
  for(let i = 0; i < splitStr.length; i++) {
    let end = splitStr[i].match(/[a-z]/gi) ? splitStr[i].substring(0,1) + 'ay' : splitStr[i]
    arr.push(splitStr[i].substring(1) + end)
  }
  return arr.join(' ');
}