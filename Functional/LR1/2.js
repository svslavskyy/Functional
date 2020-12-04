const listAnd = (...list) => list.reduce((accumulator, val) => accumulator && val, true);

const listOr = (...list) => list.reduce((accumulator, val) => accumulator || val, false);

function main() {
    console.log("listAnd:");
    console.log(`\t1) listAnd: ${listAnd()}`);
    console.log(`\t2) listAnd: ${listAnd(true)}`);
    console.log(`\t3) listAnd: ${listAnd(false)}`);
    console.log(`\t4) listAnd: ${listAnd(true, true)}`);
    console.log(`\t5) listAnd: ${listAnd(true, false)}`);
    console.log(`\t6) listAnd: ${listAnd(false, true)}`);

    console.log("\nlistOr:");
    console.log(`\t1) listOr: ${listOr()}`);
    console.log(`\t2) listOr: ${listOr(true)}`);
    console.log(`\t3) listOr: ${listOr(false)}`);
    console.log(`\t4) listOr: ${listOr(true, true)}`);
    console.log(`\t5) listOr: ${listOr(true, false)}`);
    console.log(`\t6) listOr: ${listOr(false, true)}`);
}

main();