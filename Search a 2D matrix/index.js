/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var binarySearch = function(arr, target, start, end) {
  while (true) {
    const pivot = Math.floor((start + end) / 2);
    if (target === arr[pivot] || target === arr[end] || target === arr[start]) {
      return true;
    }

    if (target > arr[pivot]) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
    if (start >= end) {
      return false;
    }
  }
}

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target === matrix[i][0] || target === matrix[i][matrix[i].length - 1]) {
      return true;
    }
    if (target > matrix[i][0] && target < matrix[i][matrix[i].length - 1]) {
      return binarySearch(matrix[i], target, 1, matrix[i].length - 2);
    }
  }
  return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));