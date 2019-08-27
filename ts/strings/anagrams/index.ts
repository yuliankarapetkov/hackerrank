export function makeAnagram(a: string, b: string): number {
    const shorter = a.length > b.length ? b : a;
    const longer = a.length > b.length ? a : b;

    const shorterChars = toCharMap(shorter);
    const longerChars = toCharMap(longer);

    let diff = 0;

    for (let char in longerChars) {
        diff += Math.abs(longerChars[char] - (shorterChars[char] || 0));
    }

    for (let char in shorterChars) {
        if (!longerChars[char]) {
            diff += shorterChars[char];
        }
    }

    return diff;
}

function toCharMap(str: string): any {
    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap;
}