export function twoStrings(s1: string, s2: string): string {
    for (let char of s1) {
        if (s2.indexOf(char) !== -1) {
            return 'YES';
        }
    }

    return 'NO';
}
