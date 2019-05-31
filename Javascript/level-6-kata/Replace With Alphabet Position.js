
// In this kata you are required to, given a string, replace every letter
// with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// First Attempt
function alphabetPosition(text) {
    let result = [];
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let lowerCaseTxt = text.toLowerCase().split(' ').join('').split('');

    lowerCaseTxt.map( letter => {
      if(letter.match(/^[a-z]+$/)) {
        result.push(alphabet.indexOf(letter)+1);
      };
    });
    return result.join(' ');
  };

// Revised cleaner attempt
function alphabetPosition(text) {
    let result = [];
    let lowerCaseTxt = text.toLowerCase().split(' ').join('').split('');

    lowerCaseTxt.map( letter => {
      if(letter.match(/^[a-z]+$/)) {
        result.push(letter.charCodeAt(0)-96);
      };
    });
    return result.join(' ');
  }
  alphabetPosition('The is just, something to test! okay?');