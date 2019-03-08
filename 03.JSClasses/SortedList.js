class SortedList {
    constructor() {
        this.collection = [];
    }

    add(element) {
        this.collection.push(element);
        this.sort();
    }

    remove(index) {
        if(index >= 0 && index < this.collection.length) {
        this.collection.splice(index, 1);
        }
    }

    get(index) {
        return this.collection[index];
    }

    get size() {
        return this.collection.length
    }

    set size(size) {
        this.collection.length = size;
    }

    sort() {
        return this.collection.sort((a, b) => (a - b));
    }
}

let list = new SortedList();
list.add(5)
list.add(6)
list.add(2)
list.add(0)
list.remove(0)
list.add(0)
console.log(list.get(0));
console.log(list.size);
console.log(list);
console.log();


