
class Complex {
    #_realPart;
    #_imagPart;

    constructor(r = 0, i = 0) {
        this.#_realPart = r;
        this.#_imagPart = i;
    }

    get real() {
        return this.#_realPart;
    }

    get imag() {
        return this.#_imagPart;
    }

    static add = (a, b) => {
        return new Complex(a.#_realPart + b.#_realPart, a.#_imagPart + b.#_imagPart);
    };

    static sub = (a, b) => {
        return new Complex(a.#_realPart - b.#_realPart, a.#_imagPart - b.#_imagPart);
    };

    add = (other) => {
        this.#_realPart += other.#_realPart;
        this.#_imagPart += other.#_imagPart;
        return this;
    };
    sub = (other) => {
        this.#_realPart -= other.#_realPart;
        this.#_imagPart -= other.#_imagPart;
        return this;
    };

    toString = () => (`Complex { ${this.#_realPart} + ${this.#_imagPart}i }`);
}
function main() {
    const c1 = new Complex(2, 2);
    const c2 = new Complex(3, 4);
    const c3 = Complex.add(c1, c2);
    const c4 = Complex.sub(c2,c1);

    console.log(`Summation с3 = с1 + с2: ${c3.toString()}`);
    console.log(`Subtraction с4 = с2 - с1: ${c4.toString()}`);
    console.log(`Summation с1 = с1 + с3: ${c1.add(c3).toString()}`);
    console.log(`Summation с1 = с1 - с4: ${c1.sub(c4).toString()}`);
}

main();