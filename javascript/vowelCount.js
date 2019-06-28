// Return the number (count) of vowels in the given string.

function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
//   Split str into an array
  str = str.split('');
//   Loop through array and check whether i == vowel
for (var i=0; i<str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        // if so, vowelCount++
        vowelsCount++;
    } 
}
  return vowelsCount;
}

getCount('asdlfeksdfsdf');