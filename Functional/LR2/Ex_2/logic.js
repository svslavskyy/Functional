class LogicUnit {
    value;

    constructor(value) {
        if (value instanceof LogicUnit) {
            // copy constructor
            this.value = value.value;
        } else {
            this.value = !!value;
        }
    }

    AND = (logicUnit) => new LogicUnit(this.value * logicUnit.value);
    OR = (logicUnit) => new LogicUnit((this.value + logicUnit.value) / 2);
    NOT = () => new LogicUnit(!this.value);
    XOR = (logicUnit) => new LogicUnit((this.value + logicUnit.value) % 2);
    DIRECT_IMPLICATION = (logicUnit) => new LogicUnit(this.value <= logicUnit.value);
    REVERSE_IMPLICATION = (logicUnit) => new LogicUnit(this.value >= logicUnit.value);

    toString() {
        return "" + +this.value;
    }
}

class Logic {
    values;

    constructor(values = [], reverse = true) {
        if (reverse)
            this.values = values.reverse().map(val => new LogicUnit(val));
        else
            this.values = values.map(val => new LogicUnit(val));
    }

    toString() {
        return this.values.reverse().reduce((accumulator, unit) => accumulator + +unit.value, "");
    }

    builder = (operation, logicObject) => {
        const length = this.values.length;
        const otherLength = logicObject.values.length;

        const lessObj = (length > otherLength ? logicObject : this);
        const moreObj = (length > otherLength ? this : logicObject);
        let ret = new Logic();
        ret.values = [
            ...lessObj.values.map((val, index) => val[operation](moreObj.values[index])),
            ...moreObj.values.slice(-Math.abs(length - otherLength))
        ];
        return ret;
    };

    NOT = () => new Logic(this.values.map(val => val.NOT()), false);

    AND = (logicObject) => this.builder("AND", logicObject);

    OR = (logicObject) => this.builder("OR",logicObject);

    XOR = (logicObject) => this.builder("XOR",logicObject);

    DIRECT_IMPLICATION = (logicObject) => this.builder("DIRECT_IMPLICATION",logicObject);

    REVERSE_IMPLICATION = (logicObject) => this.builder("REVERSE_IMPLICATION",logicObject);

}

module.exports = Logic;
module.exports = LogicUnit;