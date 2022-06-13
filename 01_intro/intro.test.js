const {sum, nativeNull} = require('./intro');

describe('Sum function:', () => {
    test('should return sum of two values', () => {
        expect(sum(2, -5)).toBe(-3);
    });

    test('should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4);
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
        expect(sum(2, 3)).toBeLessThan(6);
        expect(sum(2, 3)).toBeLessThanOrEqual(5);
    });

    test('should sum 2 float values correctly', () => {
        expect(sum(0.2, 0.1)).toBeCloseTo(0.3);
    })
});

describe('Native null function', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    });
});

