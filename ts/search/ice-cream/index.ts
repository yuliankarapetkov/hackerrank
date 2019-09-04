// Brute force O(n^2)
export function whatFlavors(flavors: number[], money: number): number[] {
    for (let i = 0; i < flavors.length; i++) {
        for (let j = i + 1; j < flavors.length; j++) {
            if (flavors[i] + flavors[j] === money) {
                return [i + 1, j + 1];
            }
        }
    }

    return [];
}

export function whatFlavorsOptimized(flavors: number[], money: number): number[] {
    const flavorsMap = {};

    for (const index in flavors) {
        if (flavors[index] <= money - 1) {
            if (!flavorsMap[flavors[index]]) {
                flavorsMap[flavors[index]] = [index];
            } else {
                flavorsMap[flavors[index]].push(index);
                flavorsMap[flavors[index]].sort((a, b) => a - b);
            }
        }
    }

    for (const flavor in flavorsMap) {
        const flavorIndex = flavorsMap[flavor][0];
        const matchingFlavor = money - +flavor;

        if (flavorsMap[matchingFlavor] && (flavorsMap[matchingFlavor].length !== 1 || flavorsMap[matchingFlavor][0] !== flavorIndex)) {
            const matchingFlavorIndex = (flavorsMap[matchingFlavor] as number[]).find(i => i !== flavorIndex);
            return [Math.min(flavorIndex, matchingFlavorIndex) + 1, Math.max(flavorIndex, matchingFlavorIndex) + 1];
        }
    }

    return [];
}


