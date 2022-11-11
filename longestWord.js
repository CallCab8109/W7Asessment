function findLongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word.length;
}

console.log(findLongestWord(["hi", "hello"]))

//runtime = O(n)
//space complexity = O(n)