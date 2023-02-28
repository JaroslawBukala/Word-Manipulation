
//create variable to hold user answers for each of the tasks
let userWord = prompt("input a word!").split('')
let userwordToBeReversed = prompt("input a word!")
let userwordWordWithUpperCase = prompt("input a word!").toLowerCase().split('')
let asciiValue = prompt("input a word!").split('')

//output a string for every other character replaced with '!'
let newCharacter = '!'
let alteredWord = ''
let counter = 0
//user forEach to iterate through the user word and check for every other character
userWord.forEach(function(character, idx){
    counter++
    if(idx % 2 == 0){
        alteredWord += character.concat(newCharacter)
    }
})
console.log(alteredWord)

//output a reversed string
let wordReversed = ''
//iterate from the end of the string to the front
for (i = userwordToBeReversed.length-1; i >= 0 ; i--) {
    wordReversed+=userwordToBeReversed[i]
}
//log the word reversed
console.log(wordReversed)


//output a word where every 6th character is uppercase
//I used information from website https://stackoverflow.com/questions/32030727/replace-every-nth-character-from-a-string
for (i = 5; i < userwordWordWithUpperCase.length-1; i+=6) {
    userwordWordWithUpperCase[i] = userwordWordWithUpperCase[i].toUpperCase()
}
console.log( userwordWordWithUpperCase.join("") );


//output ASCII for every character of a
let couterAnother = 0
let asciiValues = []
//iterate throught the user word and create a new array 
asciiValue.forEach(function(character){
    couterAnother++
    asciiValues.push(character.charCodeAt())
})
console.log(asciiValues)
