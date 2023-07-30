// get Elements
let container = document.querySelector(".container");
let counter = container.querySelector(".container span");
let decreaseBtn = container.querySelector(".container .decrease");
let resetBtn = container.querySelector(".container .reset");
let increaseBtn = container.querySelector(".container .increase");
// Add Event To  Increase Button
increaseBtn.addEventListener("click", () => {
  increaseCounter()
});
// Add Event To  Decrease Button
decreaseBtn.addEventListener("click", () => {
  decreaseCounter()
});
// Add Event To  Reset Button
resetBtn.addEventListener("click", () => {
  counter.textContent = 0;
});
//  Increases The Value Displayed In The Counter
function increaseCounter() {
    counter.textContent = parseInt(counter.textContent) + 1;
}
//  Decreases The Value Displayed In The Counter
function decreaseCounter() {
    counter.textContent = parseInt(counter.textContent) - 1;
}
