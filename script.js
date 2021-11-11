const collatz = (number) => {
    let acc = 0;
    console.log("Starting Number is", number)
    while (number > 1) {
    number = number % 2 === 0 ? number / 2 : 3 * number + 1;
    console.log(number);
    acc += 1;
}
console.log(`${acc} iterations`)
}
