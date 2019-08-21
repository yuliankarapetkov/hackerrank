export function sockMerchant(n: number, ar: number[]): number {
    const socksMap = {};

    for (let i = 0; i < n; i++) {
        if (!socksMap[ar[i]]) {
            socksMap[ar[i]] = 0;
        }

        socksMap[ar[i]]++;
    }

    let pairs = 0;

    for (let sock in socksMap) {
        pairs += Math.floor(socksMap[sock] / 2);
    }

    return pairs;
}