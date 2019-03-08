const assert = require('chai').assert;
//const subSum = require('./SubSum');


function subSum(arr, firstIndex, secondIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (arr.length === 0) {
        return 0;
    }

    if (firstIndex < 0) {
        firstIndex = 0;
    }

    if (secondIndex >= arr.length) {
        secondIndex = arr.length -1;
    }

    let subArr = arr
        .slice(firstIndex, secondIndex + 1);

    if (!subArr.every(Number)) {
        return NaN;
    }

    return subArr
        .map(Number)
        .reduce((a, b) => a + b);   
}


describe('subSum', function () {
    it('should work properly', function () {
        //Arrange
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //Act
        let result = subSum(arr, 3, 5);
        //Assert
        assert.equal(result, 15);
    })
});


//module.exports = subSum;