function lengthOfWord(a) {

    let len=0;
    x=a.trim();

    for(let i=0; i< x.length; i++) {

        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
    return len;
}

// example
input='This is an example sentence';
console.log('The length of last word is ' + lengthOfWord(input))