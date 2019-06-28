// Given an integral number, determine if it's a square number:

var isSquare = function(n){
// Take squareroot of n
n = Math.sqrt(n);
// if sqrt is -ve, then false
    if (Math.sign(n) == -1 || !Number.isInteger(n)) {
        return false;
    }
    else {
        return true;
    }
}

  console.log(isSquare(7));