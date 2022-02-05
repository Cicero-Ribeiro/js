/**
 * The Keyboard Test
 * increasing in JS Power
 * see the link:
 * 
 * @link https://developer.mozilla.org/pt-BR/docs/Web/API/KeyboardEvent
 * 
 * CR 5th Feb, 2022
 */

// const my_title = document.querySelector("h1")
// console.log(my_title.innerText)

const body = document.querySelector("body")

body.addEventListener("click", function keyEvent() {
  console.log("clicked!");
}, false);

var printme = document.querySelector("h1")

function keyEvent(event) {
  let key = event.keyCode
  printme.innerHTML = key
  console.log(String.fromCharCode(key))
}
