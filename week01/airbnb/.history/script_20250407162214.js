const decrease_price = document.getElementById("decrease-btn");
const increase_price = document.getElementById("increase-btn");
const numberElement = document.getElementById("number");

let current_num = 7;
numberElement.textContent = current_num;

function updateNumber(current, delta) {
  return current + delta;
}

decrease_price.addEventListener("click", () => {
  current_num = updateNumber(current_num, -1);
  numberElement.textContent = current_num;
});

increase_price.addEventListener("click", () => {
  current_num = updateNumber(current_num, 1);
  numberElement.textContent = current_num;
});
