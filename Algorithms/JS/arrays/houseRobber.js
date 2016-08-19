// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping you from
// robbing each of them is that adjacent houses have security system connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house,
// determine the maximum amount of money you can rob tonight without alerting the police.

// Input: Array
// ex. [5,2,3,6]
//     []
//     [1]

// Output: Integer

//     12
//     0
//     1


var rob = function(nums) {
    if( nums.length < 1 ) return 0;
    if( nums.length === 1 ) return nums[0];
    nums[1] = Math.max( nums[0], nums[1] );

    for( var i = 2; i < nums.length; i++ ){
        nums[i] = Math.max( nums[i-2] + nums[i], nums[i - 1] );
    }
    return nums[nums.length - 1];
};

var rob = function(nums) {
    return nums.reduce(function(p, n) {
        return [p[1], Math.max(p[0] + n, p[1])];
    }, [0,0])[1];
};
