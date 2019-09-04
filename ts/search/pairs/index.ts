export function findPairs(difference: number, numbers: number[]): number {
    const numbersMap = {};
    let pairs = 0;

    for (const n of numbers) {
        if (!numbersMap[n]) {
            numbersMap[n] = 1;
        } else {
            numbersMap[n]++;
        }
    }

    for (const number in numbersMap) {
        const secondNumber = difference - +number;

        if (numbersMap[secondNumber]) {
            pairs += numbersMap[number] * numbersMap[secondNumber];
        }

    }

    return pairs;
}