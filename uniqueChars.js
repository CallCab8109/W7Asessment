

function hasUniqueChars(str) {
    for(let i = 0; i<str.length; i++) {
      for(let k = i+1; k<str.length; k++) {
        if(str[i] === str[k]) {
            return false
        }
      }
    }
    return true
}


console.log(hasUniqueChars("Moonday"))

//runtime = O(n^2)
//space complexity = O(n^2)