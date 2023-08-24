/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let firstIdx = 0;
  let lastIdx = 0;
  let maxLength = 0;
  let seen = {};
  while (true) {
    if (s.length == 1) {
      return 1;
    }
    if (lastIdx >= s.length) {
      break;
    }
    char = s[lastIdx];
    if(!isNaN(seen[char]) && seen[char] >= firstIdx) {
      firstIdx = seen[char] + 1;
    } else {
      maxLength = Math.max(maxLength, lastIdx - firstIdx + 1);
    }
    seen[char] = lastIdx;
    lastIdx++;
  }
  return maxLength;
};