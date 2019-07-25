import className from '../src/className';

describe('className', () => {
    it('should return a space-separated list of classes', () => {
        expect(className('a', 'b', 'c')).toBe('a b c');
    });

    it('should return undefined when no classes were passed', () => {
        expect(className()).toBeUndefined();
    });

    it('should return undefined a falsy argument is passed', () => {
        expect(className(false)).toBeUndefined();
        expect(className(undefined)).toBeUndefined();
        expect(className(null)).toBeUndefined();
        expect(className('')).toBeUndefined();
        expect(className(0)).toBeUndefined();
    });

    it('should return undefined a falsy argument list is passed', () => {
        expect(className(false, undefined, null, '', 0)).toBeUndefined();
    });

    it('should ignore falsy arguments', () => {
        expect(className('a', undefined, 'b', null, 'c', '', 'd', 0, 'e', false, 'f')).toBe('a b c d e f');
    });

    it('should support toString()', () => {
        expect(className(
            'a',
            undefined,
            { toString: () => 'b' },
            null,
            'c',
            '',
            'd',
            0,
            'e',
            false,
            'f',
        )).toBe('a b c d e f');
    });
});
