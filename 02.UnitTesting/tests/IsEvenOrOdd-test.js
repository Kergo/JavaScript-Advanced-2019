let isEvenOrOdd = require('../IsOddOrEven');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('Even or Odd', function () {
    it('should return undefined if we pass a number', function () {
        //Arrange
        let number = 20;
        //Act
        let result = isEvenOrOdd(number);

        //Assert
        assert.equal(result, undefined);

    });

    it('should return undefined if we pass an object', function () {
        
        let obj = {name: 'Pesho'};

        expect(isEvenOrOdd(obj)).to.be.equal(undefined, "Function did not return correct result!");
    })

    it('should return even', function () {
        //Arange
        let evenString = '1234';

        //Act
        let result = isEvenOrOdd(evenString);

        //Assert
        assert.equal(result, 'even');
    });

    it('should return odd', function () {
        //Arrange
        let oddString = '123';

        //Act
        let result = isEvenOrOdd(oddString);

        //Assert
        assert.equal(result, 'odd')
    });

    it('should return correct values if we pass multiple parameters', function () {
        expect(isEvenOrOdd('cat')).to.be.equal('odd', 'Function did not return the correct result!');
        expect(isEvenOrOdd('even')).to.be.equal('even', 'Function did not return the correct result!');
        expect(isEvenOrOdd('odd')).to.be.equal('odd', 'Function did not return the correct result!');
        expect(isEvenOrOdd({})).to.be.equal(undefined, 'Function did not return the correct result!');
        expect(isEvenOrOdd(13)).to.be.equal(undefined, 'Function did not return the correct result!');

    });
});