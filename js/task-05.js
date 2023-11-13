//const inputEl = document.querySelector("#name-input");
//const outputEl = document.querySelector("#name-output");

//inputEl.addEventListener("input", handleInput);

//function handleInput(event) {
//let inputValidation =
//event.currentTarget.value > ""
//? (outputEl.textContent = event.currentTarget.value)
//: (outputEl.textContent = outputElContent);

//return inputValidation;
//}

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
function handleInput(event) {
  let inputValue = event.currentTarget.value.trim();
  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = "Anonymous";
  }
}
inputEl.addEventListener("input", handleInput);
