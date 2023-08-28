var search = function (nums, target) {
  return rotatedBinarySearch(nums, 0, nums.length - 1, target)
}


var rotatedBinarySearch = function (nums, start, end, target) {
  while (true) {
    const pivot = Math.floor((start + end) / 2);
    if (target === nums[pivot]) {
      return pivot;
    }
    if (target === nums[end]) {
      return end;
    }
    if (target === nums[start]) {
      return start;
    }

    if (
      (target > nums[start] && target < nums[pivot] && nums[start] < nums[pivot]) ||
      (target < nums[start] && target < nums[pivot] && nums[start] > nums[pivot]) ||
      (target > nums[start] && target > nums[pivot] && nums[start] > nums[pivot])) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
    if (start >= end) {
      return -1;
    }
  }
  // for (let i = start; i <= end; i++) {
  //   if (nums[i] == target) {
  //     return i;
  //   }
  // }
  // return -1;
  // return rotatedBinarySearch(nums, start, end, target);
};

console.log(search([8, 9, 2, 3, 4], 9))
