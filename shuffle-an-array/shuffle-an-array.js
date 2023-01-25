/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums];
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = [...this.original];
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i = this.nums.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [this.nums[i], this.nums[random]] = [this.nums[random], this.nums[i]];
    }
    return this.nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */