

function addToZero(array){
let answer = false
for(let i=0; i<=array.length; i++){
    for(let k=i+1; k<array.length; k++){
        if(array[i] + array[k] === 0){
            answer = true
        }
    }
} 
console.log(answer)

}

addToZero([1, 2, 3])

//runtime = O(n^2)
//space complexity = O(n^2)