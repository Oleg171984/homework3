const number = prompt("Введіть п'ятизначне число:");


if (number.length === 5 && !isNaN(number)) {
    const result = number.split('').join(' ,');
    console.log(`Число ${number} розкладене на цифри: ${result}`);
} else {
    console.log("Будь ласка, введіть дійсне п'ятизначне число.");
}
