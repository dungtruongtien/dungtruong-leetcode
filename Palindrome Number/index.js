/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xCloned = x;
  let tempNumb = 0;
  while (xCloned > 0) {
    tempNumb = (tempNumb * 10) + (xCloned % 10);
    xCloned = Math.floor(xCloned / 10);
  }
  return tempNumb === x;
};

console.log(isPalindrome(123));