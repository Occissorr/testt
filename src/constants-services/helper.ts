/**
 * 
 * @param num => A number, that is taken in as string
 * @returns => String value, 'even' or 'odd'
 */
export function isOddOrEven(num: number): string {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}