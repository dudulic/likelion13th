const decrease_price = document.getElementById("decrease-btn");
const increase_price = document.getElementById("increase-btn");
const numberElement = document.getElementById("number");
const number_mul5 = document.getElementById("number*5");

let current_num = 7;
numberElement.textContent = current_num;

function updateNumber(current, delta) {
  return current + delta;
}

let whole_num = 35;
number_mul5.textContent = whole_num;

function updateWholeNum(current_whole, delta_whole){
  return (current_whole + delta_whole)*5;
}

decrease_price.addEventListener("click", () => {
  current_num = updateNumber(current_num, -1);
  numberElement.textContent = current_num;
  whole_num = updateWholeNum(current_num,-1);
  number_mul5.textContent = whole_num;
});

increase_price.addEventListener("click", () => {
  current_num = updateNumber(current_num, 1);
  numberElement.textContent = current_num;
  whole_num = updateWholeNum(current_num,-1);
  number_mul5.textContent = whole_num;
});
