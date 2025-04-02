const decrease_price = document.getElementById("decrease-btn");
const increase_price = document.getElementById("increase-btn");
const numberElement = document.getElementById("number");

let current_num = 7;

decrease_price.addEventListener("click", () => {
  current_num -= 1;
  numberElement.textContent = current_num;
});

increase_price.addEventListener("click", () => {
  current_num += 1;
  numberElement.textContent = current_num;
});
