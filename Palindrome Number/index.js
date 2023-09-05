/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if(x >= 0 && x < 10) {
    return true;
  }
  if(x < 0 || x % 10 === 0) {
    return false;
  }
  let temp = 0;
  let flag = Math.floor(Math.log(Math.abs(x)) / Math.log(10)) + 1;
  while (x > temp) {
    temp = (temp * 10) + (x % 10);
    x = Math.trunc(x / 10);
  }
  if(flag % 2 !== 0) {
    return x === Math.floor(temp / 10);
  }
  return temp === x;
};

console.log(isPalindrome(11));