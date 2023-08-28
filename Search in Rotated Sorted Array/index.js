/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = Math.floor(nums.length / 2);
  let start = 0;
  let end = nums.length - 1;
  if (target === nums[pivot]) {
    return pivot;
  }
  if (target === nums[nums.length - 1]) {
    return nums.length - 1;
  }
  if (target === nums[0]) {
    return 0;
  }

  if (target > nums[pivot] && target < nums[nums.length - 1]) {
    start = pivot + 1;
  }
  if (target > nums[0] && target < nums[pivot]) {
    start = 0;
    end = pivot - 1;
  }
  for (let i = start; i <= end; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
};

console.log(search([7, 8, 1, 2, 3, 4, 5, 6], 2))
