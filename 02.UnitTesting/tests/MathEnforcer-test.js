let mathEnforcer = require('../MathEnforcer');
let assert = require('chai').assert;
let expect = require('chai').expect;


describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined with passed a string parameter', function () {
            expect(mathEnforcer.addFive('a')).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return undefined with passed an object parameter', function () {
            expect(mathEnforcer.addFive({})).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return undefined with passed an array parameter', function () {
            expect(mathEnforcer.addFive([2])).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return 12 with passed number 7', function () {
            expect(mathEnforcer.addFive(7)).to.equal(12, 'The function did not return the expected result!');
        });

        it('should return 2 with passed number -3', function () {
            expect(mathEnforcer.addFive(-3)).to.equal(2, 'The function did not return the expected result!');
        });

        it('should return 8.14 with passed number 3.14', function () {
            expect(mathEnforcer.addFive(3.14)).to.equal(8.14, 'The function did not return the expected result!');
        });
    });

    describe('subtractTen', function () {
        it('should return undefined with passed a string parameter', function () {
            expect(mathEnforcer.subtractTen('kur')).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return undefined with passed an object parameter', function () {
            expect(mathEnforcer.subtractTen({name: 'Stoicho'})).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return undefined with passed an array parameter', function () {
            expect(mathEnforcer.subtractTen([22, 13])).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return -5 with passed number 5', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5, 'The function did not return the expected result!');
        });

        it('should return 0 with passed number 10', function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0, 'The function did not return the expected result!');
        });

        it('should return -3.5 with passed number 6.5', function () {
            expect(mathEnforcer.subtractTen(6.5)).to.equal(-3.5, 'The function did not return the expected result!');
        });

        it('should return -30 with passed number -20', function () {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30, 'The function did not return the expected result!');
        });
    });

    describe('sum', function () {
        it('should return undefined if one of the two parametes is not a number', function () {
            expect(mathEnforcer.sum('a', 2)).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return undefined if one of the two parametes is not a number', function () {
            expect(mathEnforcer.sum('a', 'b')).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return undefined if one of the two parametes is not a number', function () {
            expect(mathEnforcer.sum(1, 'b')).to.equal(undefined, 'The function did not return the expected result!');
        });

        it('should return 4 with passed 2 and 2', function () {
            expect(mathEnforcer.sum(2, 2)).to.equal(4, 'The function did not return the expected result!');
        });

        it('should return -4 with passed -2 and -2', function () {
            expect(mathEnforcer.sum(-2, -2)).to.equal(-4, 'The function did not return the expected result!');
        });

        it('should return -8 with passed -10 and 2', function () {
            expect(mathEnforcer.sum(-10, 2)).to.equal(-8, 'The function did not return the expected result!');
        });

        it('should return 0 with passed 2 and -2', function () {
            expect(mathEnforcer.sum(2, -2)).to.equal(0, 'The function did not return the expected result!');
        });

        it('should return 0 with passed 2.2323232323 and -2.2323232323', function () {
            expect(mathEnforcer.sum(2.2323232323, -2.2323232323)).to.be.closeTo(0, 0,  'The function did not return the expected result!');
        });

        it('should return 4.4646464646 with passed 2.2323232323 and 2.2323232323', function () {
            expect(mathEnforcer.sum(2.2323232323, 2.2323232323)).to.be.closeTo(4.4646464646, 4.4646464646,  'The function did not return the expected result!');
        });

        it('should return -4.4646464646 with passed -2.2323232323 and -2.2323232323', function () {
            expect(mathEnforcer.sum(-2.2323232323, -2.2323232323)).to.be.equal(-4.4646464646,  'The function did not return the expected result!');
        });
    });
});