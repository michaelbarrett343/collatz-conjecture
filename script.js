const input = document.getElementById("num-input");
const btnrun = document.querySelector(".btn-run");
const iterations = document.querySelector(".iterations")

const collatz = (number) => {
  let acc = 0;
  iterations.insertAdjacentHTML("beforeEnd",`<li>"Starting Number is"${number}</li>`);
  while (number > 1) {
    number = number % 2 === 0 ? number / 2 : 3 * number + 1;
    iterations.insertAdjacentHTML("beforeEnd",`<li>${number}</li>`);
    acc += 1;
  }
  iterations.insertAdjacentHTML("beforeEnd",`<li>${acc} Iterations </li>`);
}
btnrun.addEventListener("click", (e) => {
    collatz(input.value)
})
