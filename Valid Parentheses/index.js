/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i]);
    }
    else {
      const close = arr.pop();
      if(!close) {
        return false;
      }
      if(s[i] == ')' && close !== '(') {
        return false;
      }
      if(s[i] == ']' && close !== '[') {
        return false;
      }
      if(s[i] == '}' && close !== '{') {
        return false;
      }
    }
  }
  return !arr.length;
};