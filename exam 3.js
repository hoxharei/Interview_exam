function printWord(str){
   let number =0;
   let arrayOfWords = str.split(' ')
   for (let i = 0; i < arrayOfWords.length; i++) {
       //we get the first string of the sentence
       let firstChar = arrayOfWords[i].charAt(0);
       let lastChar = arrayOfWords[i].charAt(arrayOfWords[i].length - 1);
       if (firstChar === lastChar) {
           number++;
       }
   }
   return number
}

//test
let str = "My Dad and my mom took me to the movies " //example
console.log(printWord(str))