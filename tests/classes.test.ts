import classes from '../src/classes';

describe('classes', () => {
    it('should return a space-separated list of classes', () => {
        expect(classes('a', 'b', 'c')).toBe('a b c');
    });

    it('should return undefined when no classes were passed', () => {
        expect(classes()).toBeUndefined();
    });

    it('should return undefined a falsy argument is passed', () => {
        expect(classes(false)).toBeUndefined();
        expect(classes(undefined)).toBeUndefined();
        expect(classes(null)).toBeUndefined();
        expect(classes('')).toBeUndefined();
        expect(classes(0)).toBeUndefined();
    });

    it('should return undefined a falsy argument list is passed', () => {
        expect(classes(false, undefined, null, '', 0)).toBeUndefined();
    });

    it('should ignore falsy arguments', () => {
        expect(classes('a', undefined, 'b', null, 'c', '', 'd', 0, 'e', false, 'f')).toBe('a b c d e f');
    });

    it('should support toString()', () => {
        expect(classes(
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
