class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let output = `${this.name}\n`

        for (let rat of this.unitedRats) {
            output += `##${rat.name}\n`;
        }

        return output;
    }
}

let rat = new Rat('Pesho');
let rat1 = new Rat('Gosho');
let rat2 = new Rat('Tosho');

rat.unite(rat1)
rat.unite(rat2)

console.log(rat.toString());