// Events
// Listeners in CSS
// <button onclick="alert('Hello World')">Click Me</button> 

// CSS + Button
const btn1 = document.querySelector("#btn");
btn1.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener("click", alertFunction);