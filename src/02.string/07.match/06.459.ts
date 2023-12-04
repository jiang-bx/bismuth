export function repeatedSubstringPattern(s: string): boolean {
    /**
     * const str = s + s;
    return str.substring(1, str.length - 1).indexOf(s) >= 0;
     */
    return (s + s).slice(1, -1).includes(s);
}
