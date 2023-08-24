/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let subtractionMapping = {};
  for (let i = 0; i < nums.length; i++) {
    const reqNumb = target - nums[i];
    if (!isNaN(subtractionMapping[reqNumb])) {
      return [i, subtractionMapping[reqNumb]]
    }
    subtractionMapping[nums[i]] = i
  }
};