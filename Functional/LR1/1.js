const countLowerCase = (str) => str.split("").reduce(
    (accumulator, ch) => ch === ch.toLowerCase() ? accumulator + 1 : accumulator, 0);

function main() {
    console.log(countLowerCase("aBCde"));
    console.log(countLowerCase("Hello"));
}

main();