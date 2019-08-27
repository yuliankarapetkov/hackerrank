export function alternatingCharacters(str: string): number {
    let counter = 0;

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        }
    }

    return counter;
}
