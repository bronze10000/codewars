function squareDigits(num){
    //may the code be with you
   num = num.toString().split('');

   for (var i=0; i<num.length; i++) {
    // Convert each index to number
       num[i] = parseInt(num[i], 10);
    // Loop through array and multiply each number by itself
        num[i] = num[i] * num[i]
        console.log(num[i]);
    }
    // Join the array together
    num = num.join('');
   return num; 
  }
  newFunction();

function newFunction() {
    console.log(squareDigits(123));
}
