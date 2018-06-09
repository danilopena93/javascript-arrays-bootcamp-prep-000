var chocolateBar = ['snickers', 'hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (arr, elem) {
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  return [elem, ...arr]
}

function addElementToEndOfArray (arr, elem) {
  return [...arr, elem]
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  return [...arr, elem]
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}