// Complete the solution so that it reverses all of the words within the string passed in.

// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str){
// Split str at ' '.
    str = str.split(' ');
// Reverse order of array
    str = str.reverse();

// Fuse array into string
    str = str.join(' ');
  return str; // reverse those words
}

reverseWords('Oh happy day');