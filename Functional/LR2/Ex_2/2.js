const Logic = require("./logic");
const LogicUnit = require("./logic")

function main() {
    const trueObj = new LogicUnit(true);
    const falseObj = new LogicUnit(false);

    console.log(trueObj.AND(falseObj).value);
    console.log(trueObj.OR(falseObj).value);
    console.log(trueObj.AND(trueObj).AND(trueObj).toString());
    console.log(trueObj.OR(falseObj).toString());

    const obj_01100 = new Logic([0, 1, 1, 0, 0]);
    const obj_111001 = new Logic([1, 1, 1, 0, 0, 1]);
    const obj_000000 = new Logic([0, 0, 0, 0, 0, 0]);

    console.log("01100 AND 111001 = " + obj_01100.AND(obj_111001).toString());
    console.log("NOT 01100 = " + obj_01100.NOT().toString());
    console.log("01100 OR 000000 = " + obj_01100.OR(obj_000000).toString());
    console.log("01100 XOR 000000 = " + obj_01100.XOR(obj_000000).toString());
    console.log("01100 >= 111001 = " + obj_01100.DIRECT_IMPLICATION(obj_111001).toString());
    console.log("01100 <= 111001 = " + obj_01100.REVERSE_IMPLICATION(obj_111001).toString());
}

main();