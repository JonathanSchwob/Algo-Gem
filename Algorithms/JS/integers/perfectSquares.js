// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.


/**
 * @param {number} n
 * @return {number}
 */

function numSquares(n) {
  var map = [0],
      i, j, min;
  for( i = 1; i <= n; i++ ){
    j = 1;
    min = i;
    while( j * j <= i ){ // 1*1 <= 1
      min = Math.min(min, 1 + map[i - j * j]); // min = 1, 1 + map[1 - 1*1] -> (1, 1)
      j++; // j = 2
    }
    map[i] = min; //[0, 1, 2]
  }
  return map[n];
}


// Static Dynamic Programming:

var numSquares = function(n) {
    var possible = [0],
        len, temp;
    while( possible.length <= n ){
        len = possible.length;
        temp = n;
        for( var i=1; i*i<=len; i++ ){ // [0] -> building up our array
            console.log("tmp: ", temp, "element: ", possible[len-i*i])
            if( temp > possible[len-i*i]+1 ){ // 9 > possible[ 1 - 1*1 ]+1
                temp = possible[len-i*i]+1;// temp = possible[ 1 - 1*1 ]+1 -> temp = 1
            }
        }
        possible.push( temp ); // [0, 1]
    }
    return possible[n];
};


