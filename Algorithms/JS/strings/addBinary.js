// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".



//UNFINISHED

var addBinary = function(a, b) {
    var digitOne = parseInt(a, 2),
        digitTwo = parseInt(b, 2);
    var integer = JSON.stringify(digitOne + digitTwo);

    return Number(integer).toString(2);

};

//UNFINISHED

var addBinary = function(a, b) {
    var aVal = 0;
    var bVal = 0;
    var counter = 0;
    for(var i = 0; i < a.length; i++){
        if(a[i] === "1"){
            aVal += Math.pow(2, a.length-1 - i);
        }
    }
    for(var j = 0; j < b.length; j++){
        if(b[j] === "1"){
            bVal += Math.pow(2, b.length-1 - j);
        }
    }
    var sum = aVal + bVal;
    var str = Array(Math.floor(sum/Math.floor(Math.log2(sum)))+ 3).join('x');

    while(sum>1){
        str[counter] = sum%2;
        console.log(str);
        // console.log(counter)
        // console.log(sum%2)
        counter++;
        sum = Math.floor(sum/2);
        // console.log(str);
    }
    return str;
};
