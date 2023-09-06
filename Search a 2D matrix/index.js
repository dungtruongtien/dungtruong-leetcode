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
  let start = 0;
  let end = matrix.length - 1;
  while(true) {
    const pivot = Math.floor((start + end) / 2);
    const pivotRow = matrix[pivot];
    if(target >= pivotRow[0] && target <= pivotRow[pivotRow.length - 1]) {
      if(target === pivotRow[0] || target === pivotRow[pivotRow.length - 1]) {
        return true;
      }
      return binarySearch(pivotRow, target, 1, pivotRow.length - 1);
    }
    if(target > pivotRow[pivotRow.length - 1]) {
      start = pivot + 1;
    } else if(target < pivotRow[0]) {
      end = pivot - 1;
    }
    if (start > end) {
      return false;
    }
  }
};