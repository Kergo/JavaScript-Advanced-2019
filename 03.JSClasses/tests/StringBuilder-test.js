const StringBuilder = require('../StringBuilder');
const { expect } = require('chai');


describe('String Builder Tests', function () {
    let sb;
    beforeEach(function () {
        sb = new StringBuilder();
    });

    describe('constructor tests', function () {
        it('is initialized without parms', function () {
            expect(sb._stringArray.join(''))
                .to.be.equal('', 'Expected empty string!')
        });

        it('is initialized with params', function () {
            //Arrange
            sb = new StringBuilder('Test');
            const expected = 'Test';

            //Assert
            expect(sb._stringArray.join(''))
                .to.be.equal(expected, 'Expected to return Test')
        });
    });

    describe('prepend tests', function () {
        it('is initialized with wrong parameter type', function () {

            //Act
            const errorFunc = () => {
                sb.prepend({name: 'Pesho'});
            }

            //Assert
            expect(errorFunc).to.throw(TypeError)
        });

        it('is initialized with correct data', function () {
            //Arrange
            const expected = 'Test123'

            //Act
            sb.prepend('Test123');

            //Assert
            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return Test123')
        });

        it('is initialized with multiple correct data', function () {
            //Arrange
            const expected = 'Hello from JS'

            //Act
            sb.prepend('JS');
            sb.prepend('from ');
            sb.prepend('Hello ');

            //Assert
            expect(sb._stringArray.join('')).to.be.equal(expected, `Expected to return ${expected}`)
        });
    });

    describe('append tests', function () {
        it('is initialized with wrong parameter type', function () {

            //Act
            const errorFunc = () => {
                sb.append({name: 'Pesho'});
            }

            //Assert
            expect(errorFunc).to.throw(TypeError)
        });

        it('is initialized with correct data', function () {
            //Arrange
            const expected = 'Test123'

            //Act
            sb.append('Test123');

            //Assert
            expect(sb._stringArray.join('')).to.be.equal(expected, 'Expected to return Test123')
        });

        it('is initialized with multiple correct data', function () {
            //Arrange
            const expected = 'Hello from JS'

            //Act
            sb.append('Hello ');
            sb.append('from ');
            sb.append('JS');

            //Assert
            expect(sb._stringArray.join('')).to.be.equal(expected, `Expected to return ${expected}`)
        });
    });

    describe('remove tests', function () {
        it('works correctly', function () {
            //Arrange
            const expected = 'Hello JS';

            //Act
            sb.append('Hello ');
            sb.append('from ');
            sb.append('JS');
            sb.remove(5, 5);

            //Assert
            expect(sb._stringArray.join('')).to.be.equal(expected, `Expected to return ${expected}`);
        });
    });

    describe('insertAt tests', function () {
        it('is tested with wrong parameter type', function () {
            const errorFunc = () => {
                sb.insertAt({});
            }

            expect(errorFunc).to.throw(TypeError);
        });

        it('works correctly', function () {
            //Arrange
            const expected = 'Hello from JS';

            //Act
            sb.append('Hello ');
            sb.append('JS');
            sb.insertAt('from ', 6);

            //Assert
            expect(sb._stringArray.join('')).to.be.equal(expected, `Expected to return ${expected}`);
        });
    });

    describe('toString tests', function () {
        it('test if it works correctly' , function () {
            sb.prepend('Test123');

            expect(sb.toString()).to.be.equal('Test123');
        });
    });
});
