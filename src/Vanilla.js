// THIS IS A ROUGH/SUDO SOLUTION IN VANILLA.JS. PLEASE IGNORE ALL SYNTAX ERRORS


// Character Count: Needs to take in a string and return the length. Stretch feature? - tells you if you have reached a character limit

function charCount(str, num){

  let output = str.length
  return output,'/',num
}
charCount('This should equal 32 characters.', 280)

// Word Count: Needs to take in a sentence string, convert to array and returns the length of the array. Also takes in the required amount of words as num

function wordCount(str, num) {
  // console.log(str)
let output = str.split(' ')
// console.log(output.length) 
if (output.length < num) {
return 'yo ${output} oo'
}
else {return 'LET\'S GOOOO!!! ${output.length} words!'}
}
wordCount('This is a sentence full of words.', 500)


//  Sentence Count: Needs to take in a paragraph string, convert to array by ending punctuation (.?!) 

function sentCount(str) {
  let output = str.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
  // console.log(output)
  return output.length
}
sentCount('This is a paragraph. This paragraph is full of sentences! If the above code is correct, it will count the amount of sentences and return 7. Did it work? Great! The only problem now is what if the sentence begins with a number? I will come back to this if I have time.')

// Paragraph Count: Needs to take in a string of paragraphs, recognize a paragraph which is separated by newlines, count the amount of those and return it.

function parCount(str) {
  // console.log(str)
let output = str.split('\n')
// console.log(output)
return output.length
}
parCount('I\'m currently on a flight back to NYC from Florida. I was visiting family for the week. Seriously. \n The flight was getting ready to take off when I recieved the email containing this code challenge. Just as I began to read it, The pilot announced that there was a storm in NY and we were delayed at least an hour. We were told to exit the plane until further notice. We finally boarded again 3 hours later and now I\'m here typing this function. \n Anyway, this is a 3 paragraph string. If the above code is correct, it will count the amount of paragraphs and return 3. Did it work? Great!')

// Bigram Counter: Needs to find unique pairs of words in the string and return the amount.

function bigramCount(str, word) {
    // console.log(str, word)
  let arr = str.split(' ')
  // console.log(arr)
  let output = arr.map(el)
  }
  bigramCount('yo hello hello', 'hello')