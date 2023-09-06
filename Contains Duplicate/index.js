/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const mapping = {};
  for (let i = 0; i < nums.length; i++) {
    if (mapping[nums[i]]) return true;
    mapping[nums[i]] = true;
  }
  return false;
};