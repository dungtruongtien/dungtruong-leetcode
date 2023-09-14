/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var isNumber = function (num) { return !isNaN(num) }

function sortThreeIntegers(a, b, c) {
  if (a > b) {
    [a, b] = [b, a];
  }
  if (a > c) {
    [a, c] = [c, a];
  }
  if (b > c) {
    [b, c] = [c, b];
  }

  return `${a}${b}${c}`;
}

// const result = sortThreeIntegers(3, 1, 2);
// console.log(result); // Output: [1, 2, 3]


var threeSum = function (nums) {
  const result = [];
  const checkExistedArray = {};
  for (let i = 0; i < nums.length; i++) {
    const subtractionMapping = {};
    subtractionMapping[nums[i]] = i
    for (let j = i + 1; j < nums.length; j++) {
      const reqNumb = 0 - nums[i] - nums[j];
      if (isNumber(subtractionMapping[reqNumb]) && i !== j && subtractionMapping[reqNumb] !== i && subtractionMapping[reqNumb] !== j) {
        const subtractionMappingReqNumbIdx = subtractionMapping[reqNumb];
        const uniqueKey = sortThreeIntegers(nums[i], nums[j], nums[subtractionMappingReqNumbIdx]);
        // const existedKey = Math.pow(nums[i],2) + Math.pow(nums[j],2) + Math.pow(nums[subtractionMapping[reqNumb]], 2)
        if(!checkExistedArray[uniqueKey]) {
          result.push([nums[i], nums[j], nums[subtractionMappingReqNumbIdx]])
          checkExistedArray[uniqueKey] = true;
        }
      }
      subtractionMapping[nums[j]] = j;
    }
  }
  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
