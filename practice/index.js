function jsPush(array, num) {
  array[array.length] = num
}
let pushArray = [10, 20, 15, 5]
const value = 4
jsPush(pushArray, value)
console.log(pushArray)
function jsTop(array) {
  return array[array.length - 1]
}
let topArray = [18, 20, 16, 14]
const top = jsTop(topArray)
console.log(top)
function jsPop(array) {
  const popValue = array[array.length - 1]

  array.length = array.length - 1
  return popValue
}
let popArray = [3, 9, 16, 6]
jsPop(popArray)
console.log(popArray)