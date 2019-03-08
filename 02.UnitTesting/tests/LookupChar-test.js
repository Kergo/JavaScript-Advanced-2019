let lookupChar = require('../LookupChar');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('lookupChar', function () {
    describe('Testing the functionality with incorrect parameters', function () {
        it('should return undefined with a non-string first parameter', function () {
            expect(lookupChar(13, 0)).to.equal(undefined, "The function did not return the expected result!");
        });
    
        it('should return undefined with a non-string first parameter', function () {
            expect(lookupChar({name: 'Pesho'}, 0)).to.equal(undefined, "The function did not return the expected result!");
        });
    
        it('should return undefined with a non-string first parameter', function () {
            expect(lookupChar(['Kvo stava'], 0)).to.equal(undefined, "The function did not return the expected result!");
        });
    
        it('should return undefined with a non-number second parameter', function () {
            expect(lookupChar('Pesho', 'NaN')).to.equal(undefined, "The function did not return the expected result!");
        });
    
        it('should return undefined with a non-number second parameter', function () {
            expect(lookupChar('Pesho', [2])).to.equal(undefined, "The function did not return the expected result!");
        });
    
        it('should return undefined with a non-number second parameter', function () {
            expect(lookupChar('Pesho', {})).to.equal(undefined, "The function did not return the expected result!");
        });
    
        it('should return undefined with a non-number second parameter', function () {
            expect(lookupChar('Pesho', 1.23)).to.equal(undefined, "The function did not return the expected result!");
        });
    });
    
    describe('Testing the functionality with indexes out of range', function () {
        it('should return incorect index with passed negative index', function () {
            expect(lookupChar('Pesho', -1)).to.equal('Incorrect index', 'The function did not return the expected result!');
        });
    
        it('should return incorect index with passed greater index', function () {
            expect(lookupChar('Pesho', 123)).to.equal('Incorrect index', 'The function did not return the expected result!');
        });
    
        it('should return incorect index with index equal to the string length', function () {
            expect(lookupChar('Pesho', 5)).to.equal('Incorrect index', 'The function did not return the expected result!');
        });
    
        it('should return incorect index with index equal to the string length', function () {
            expect(lookupChar('', 0)).to.equal('Incorrect index', 'The function did not return the expected result!');
        });
    });
    
    describe('Testing the functionality with correct parameters', function () {
        it('should return correct value', function () {
            expect(lookupChar('Pesho', 0)).to.equal('P', 'The function did not return the expected result!');
        });
    
        it('should return correct value', function () {
            expect(lookupChar('Pesho', 4)).to.equal('o', 'The function did not return the expected result!');
        });
    
        it('should return correct value', function () {
            expect(lookupChar(' ', 0)).to.equal(' ', 'The function did not return the expected result!');
        });
    });
});