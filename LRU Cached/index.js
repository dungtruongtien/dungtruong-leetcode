function LRUCached(strArr) {
  const mapped = {} // character: idx
  const result = [];
  for (let i = 0; i < strArr.length; i++) {
    const character = strArr[i];
    if (mapped[character] == 0 || mapped[character]) {
      // swap
      result.push(character)
      result.splice(mapped[character], 1);
      mapped[character] = i - 1;
    } else {
      // push, append to mapped
      mapped[character] = i;
      result.push(character)
    }
    if (result > 5) {
      result.splice(0, 1);
      // remove first element
    }
  }
  return result.join('-');
}

console.log('LRUCached----', LRUCached(["A", "B", "C", "D", "A", "E", "D", "Z"]));