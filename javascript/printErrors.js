function printerError(s) {
    // your code
var numerator = 0;
var denominator = 0;
// put s as array
var sArray = s.split('');
// Put good controls as array
// const goodControls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
// Loop through s array and check to see if it contains any from good-controls array
for (var i=0; i<sArray.length; i++) {
//    for (var j=0; j<goodControls.length; j++) {
    switch (sArray[i]) {
        case( sArray[i] == 'a') :
            numerator++;
        break;
        case( sArray[i] == 'b') :
            numerator++;
        break;
        case( sArray[i] == 'c') :
            numerator++;
        break;
        case( sArray[i] == 'd') :
            numerator++;
        break;
        case( sArray[i] == 'e') :
            numerator++;
        break;
        case( sArray[i] == 'f') :
            numerator++;
        break;
        case( sArray[i] == 'g') :
            numerator++;
        break;
        case( sArray[i] == 'h') :
            numerator++;
        break;
        case( sArray[i] == 'i') :
            numerator++;
        break;
        case( sArray[i] == 'j') :
            numerator++;
        break;
        case( sArray[i] == 'k') :
            numerator++;
        break;        
        case( sArray[i] == 'l') :
            numerator++;
        break;
        case( sArray[i] == 'm') :
            numerator++;
        break;    
        default:
            denominator++;    
    };

    console.log (numerator);
    console.log (denominator);
}

return ({numerator} + '/' + {denominator});
}

(printerError('asssb'));