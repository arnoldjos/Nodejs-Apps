const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    it('Should add two numbers', () => {
        const res = utils.add(2, 50);

        expect(res).toBe(52).toBeA('number');
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBeA('number').toBe(7);
            done();
        })
    });

    it('Should return the square of a number', () => {
        const res = utils.square(2);

        expect(res).toBe(4).toBeA('number');
        // if (res !== 4) {
        //     throw new Error(`The value should be 4 but got ${res}`)
        // }
    });

    it('Should async square 2 numbers', (done) => {
        utils.asyncSquare(2, val => {
            expect(val).toBeA('number').toBe(4);
            done();
        });
    });

    it('should expect some values', () => {
        // expect(12).toNotBe(12);
        // expect({name: 'John'}).toEqual({name: 'John'});
        // expect([2,3,4]).toExclude(1);
        expect({
            name: 'Arnold',
            age: 20,
            location: 'Bohol'
        }).toInclude({
            age: 20
        });
    });

    it('should verify first and last names are set', () => {
        let p = {
            location: 'Bohol',
            age: 20
        };
        const fullName = 'Arnold Fudolig';
        p = utils.setName(p, fullName);

        expect(p).toBeA('object').toInclude({
            firstName: 'Arnold',
            lastName: 'Fudolig'
        })
    });
});

