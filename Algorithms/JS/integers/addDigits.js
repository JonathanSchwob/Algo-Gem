

var addDigits = function(num) {
   if(num === 0){
        return 0;
   }
   if(num%9 === 0){
       return 9;
   }
   else{
      return num%9;
   }
};


var addDigits = function(num) {
    if(num<10){
        return num;
    }
    var strArr = num.toString().split("");
    var sum = strArr.reduce(function(a,b) {return Number(a) + Number(b)});
    if(sum.toString().split("").length === 1){
        console.log(sum);
        return sum;
    }else{
        addDigits(sum);
    }
};
addDigits(56);