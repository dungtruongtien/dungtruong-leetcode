// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// var isNumber = function (num) { return !isNaN(num) }

// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   const result = [];
//   const checkExistedArray = {};
//   for (let i = 0; i < nums.length; i++) {
//     const subtractionMapping = {};
//     subtractionMapping[nums[i]] = i
//     for (let j = i + 1; j < nums.length; j++) {
//       const reqNumb = 0 - nums[i] - nums[j];
//       if (isNumber(subtractionMapping[reqNumb]) && subtractionMapping[reqNumb] !== i && subtractionMapping[reqNumb] !== j) {
//         const subtractionMappingReqNumbIdx = subtractionMapping[reqNumb];
//         const uniqueKey = `${nums[i]}${nums[j]}${nums[subtractionMappingReqNumbIdx]}`;
//         if(!checkExistedArray[uniqueKey]) {
//           result.push([nums[i], nums[j], nums[subtractionMappingReqNumbIdx]])
//           checkExistedArray[uniqueKey] = true;
//           subtractionMapping[nums[j]] = j;
//           continue;
//         }
//       }
//       subtractionMapping[nums[j]] = j;
//     }
//   }
//   return result;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]))



/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var isNumber = function (num) { return !isNaN(num) }

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const checkExistedArray = {};
  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    const sum = 0 - nums[i];
    while(low < high) {
      if(nums[low] + nums[high] == sum) {
        result.push(nums[i], nums[low], nums[high]);
      }
    }
  }
  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
