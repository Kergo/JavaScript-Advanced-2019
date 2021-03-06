let solution = (function () {
    const add = ([xA, yA], [xB, yB]) => {
        return [ xA + xB, yA + yB ];
    }

    const multiply = ([xA, xB], scalar) => {
        return [ xA * scalar, xB * scalar ];
    }

    const length = ([xA, xB]) => {
        return Math.sqrt(xA ** 2 + xB ** 2);
    }

    const dot = ([xA, yA], [xB, yB]) => {
        return xA * xB + yA * yB;
    }

    const cross = ([xA, yA], [xB, yB]) => {
        return xA * yB - xB * yA;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }

})()

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
