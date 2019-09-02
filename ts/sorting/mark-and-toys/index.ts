export function maximumToys(prices: number[], budget: number): number {
    const sorted = prices.sort((a, b) => a - b);
    let toys = 0;

    for (let i = 0; i < sorted.length && budget - sorted[i] > 0; i++) {
        budget -= sorted[i];
        toys++;
    }

    return toys;
}