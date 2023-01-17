function hasNumbers(expression){
    return /\d/.test(expression)
}

function stringsWithNumbers (arr){
    let stringAndNumbersArray = []
    for(let i=0; i<arr.length; i++){
        if(hasNumbers(arr[i])){
            stringAndNumbersArray.push(arr[i])
        }
    }
    return stringAndNumbersArray
}

//test

let arr = ['1a', 'fl', 'ca', 'b5', 'c9']

console.log(stringsWithNumbers(arr))
