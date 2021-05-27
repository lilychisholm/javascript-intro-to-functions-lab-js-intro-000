function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return console.log('HELLO')
}
function logWhisper(string) {
  return console.log('hello')
}
var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'I love you, Grandma.'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma(string){
  if (string === lowercase) {
    return console.log ("I can\'t hear you!")
  }
}
