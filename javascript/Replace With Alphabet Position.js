// 6 kyu
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
// Place 'text' into an array
text = text.toLowerCase().split('');
var numText = [];
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (var i=0; i<text.length; i++) {
    // Use regex to check if text[i] is an alphabet
    if (text[i].match(/[a-z]/)) {
      // if so, check against alphabet array by looping through and getting the index of that letter
      for (var j=0; j<alphabet.length; j++) {
        if (text[i] == alphabet[j]) {
          numText.push((alphabet.indexOf(alphabet[j])+1) + ' ');
        }
      }
    } else {
      // numText.push(text[i]); 
    }
  }
    return numText.join('');
  }
  alphabetPosition('Happy!');