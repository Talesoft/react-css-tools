export declare type ClassNameValue = object | string | number | boolean | null | undefined;
/**
 * Converts all passed arguments to a CSS className separated by a space.
 *
 * All falsy values will be dropped, which allows for class expressions similar
 * to react coding styles
 *
 * <sample>
 *     className('my-class')                       // "my-class"
 *     className('class-1', 'class-2', 'class-3')  // "class-1 class-2 class-3"
 *     let active = true;
 *     className('my-class', active && 'active')   // "my-class active"
 *     active = false;
 *     className('my-class', active && 'active')   // "my-class"
 * </sample>
 *
 * @param classNames
 */
export default function className(...classNames: ClassNameValue[]): string | undefined;
