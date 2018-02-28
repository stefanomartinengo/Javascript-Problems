// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method 
// must return a boolean and be case insensitive. The string can contain any char.



function XO(str) {
    var x = str.replace(/x/gi, '').length;
    var o = str.replace(/o/gi, '').length;
      return x === o;
  }

// 2nd Solution not using Regex 

  function exes(str) {
    var x = 0
    var y = 0
    var lower = str.toLowerCase()
    for(var i = 0; i < lower.length; i++) {
      if(lower[i] == 'x') {
        ++x
      } else {
        ++y
      }
    }
    return x === y
  }