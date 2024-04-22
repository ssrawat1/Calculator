let btns = document.querySelectorAll(".button");
let input = document.querySelector(".input");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      // Evaluate the expression
      let values = eval(input.value);
      input.value = values;
    } else if (e.target.innerText === "AC") {
      // Clear the input field
      input.value = "";
    } else if (e.target.innerText === "DE") {
      // Delete one character from the input field
      input.value = input.value.slice(0, -1);
    } else {
      // Append the clicked button's text to the input field
      input.value += e.target.innerText;
    }
  });
});
