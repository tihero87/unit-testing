const Lodash = require('./sync');
let _ = new Lodash();
describe('Lodash: compact', () => {


    let array = [];

    afterAll(() => {
        _ = new Lodash()
    });
    beforeEach(() => {
        array = ['Hello', 0, false, 'Bye', '', true];
    });

    test('should be defined', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
   });

    test('should remove falsy values from array', () => {
       const result = ['Hello', 'Bye', true];
       expect(_.compact(array)).toEqual(result);
    });

    test('should no contains falsy value', () => {
        expect(_.compact(array)).not.toContain(null);
        expect(_.compact(array)).not.toContain(false);
        expect(_.compact(array)).not.toContain(0);
        expect(_.compact(array)).not.toContain('');
        expect(_.compact(array)).not.toContain(undefined);
    })
});

describe('Lodash: groupby', () => {
   test('should be defined', () => {
       expect(_.groupBy).toBeDefined();
       expect(_.groupBy).not.toBeUndefined();
   });

   test('should group array items by Math.floor', () => {
       const arr = [2.2, 2.4, 4.2, 3.1];
       const result = {
           2: [2.2, 2.4],
           4: [4.2],
           3: [3.1]
       };
       expect(_.groupBy(arr, Math.floor)).toEqual(result)
   });

    test('should group array items by length', () => {
        const arr = ['one', 'two', 'three'];
        const result = {
            3: ['one', 'two'],
            5: ['three']
        };
        expect(_.groupBy(arr, 'length')).toEqual(result)
    });

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    })
});