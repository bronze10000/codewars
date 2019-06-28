function comp(a1, a2){
    //your code here
    var a1a2 = [];
    for (var i=0; i<a1.length; i++) {
        if (a1[i] == a2[i]) {
            a1a2.push(true);
        } else {
            a1a2.push(false);
        };
    };
  }

  a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
  comp(a1, a2);