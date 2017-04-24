// When writing out a loop, remember to avoid using return. Return will end the function, it's best to use something that won't end the function, like console.log.
// For the loop below, I am adding onto the given array in the parameters. The function will add one item to the array each time i is less than 25. Starting at 0, the loop will push into the array the phrase "I am a strange loop." when ' i ' = 1. Then for every other integer up until 25 it will say "I am ${ i } strange loops."
// then at the end of the function, it will return the compiled array. The function will end.
function forLoop(array) {
  // This line is defining the loop, first defining " i " as equaling 0. Then it lists the condition, that as long as i is less than 25. Finally there is the iteration, stating that " i " should increase by 1 at the end of each loop.
  // This means that " i " equals 0, so the loop will run and then at the end increment (or increase by 1) the value " i " until ' i ' is more than 25, then the loop will end and the array will be returned.
  for (let i=0; i<25; i++) {
    // An if statement using the boolean === operator to compare ' i ' and 1 to make sure they are equal, and then giving the string to be pushed onto the array if it passes as true. If false, see following else statement.
    if (i===1) {
      array.push('I am a strange loop.')
    }
    // This is the else statement that let's the loop repeat until it reaches 25.
    else {
      array.push('I am ' + i + ' strange loops.')
    }
  }
  // The array is returned and the loop is complete.
  return array
}

function whileLoop(n){
  while(n>0){
    console.log(n--)
  }
  return ('done')
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop(array)
  } while (array.length>0 && maybeTrue())
  return array
}
