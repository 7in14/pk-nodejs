'use strict';

const Lab = require('lab');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const {
    expect
} = require('Code');
const Pinger = require('../../utils/pinger');

const lab = exports.lab = Lab.script();

lab.experiment('Pinger tests', () => {

    lab.test('should say ping', () => {

        // Arrange

        // Act
        const result = Pinger.sayPong();

        // Assert
        expect(result).to.equal('Pong');
    });
});
