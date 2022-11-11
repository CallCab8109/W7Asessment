alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

console.log(isPangram("I like cats, but not mice"));


//runtime = O(1)
//space complexity = O(n)