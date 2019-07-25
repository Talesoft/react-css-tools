"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts all passed arguments to a CSS classes separated by a space.
 *
 * All falsy values will be dropped, which allows for class expressions similar
 * to react coding styles
 *
 * <sample>
 *     classes('my-class')                       // "my-class"
 *     classes('class-1', 'class-2', 'class-3')  // "class-1 class-2 class-3"
 *     let active = true;
 *     classes('my-class', active && 'active')   // "my-class active"
 *     active = false;
 *     classes('my-class', active && 'active')   // "my-class"
 * </sample>
 *
 * @param classNames
 */
function classes(...classNames) {
    return classNames.filter(v => !!v).join(' ').trim() || undefined;
}
exports.default = classes;
