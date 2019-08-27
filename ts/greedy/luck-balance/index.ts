export function luckBalance(maxLostCount: number, contests: number[][]): number {
    const importantContests = [];
    const unimportantContests = [];

    let totalLuck = 0;
    
    for (let i = 0; i < contests.length; i++) {
        const [luck, importance] = contests[i];

        if (importance === 1) {
            importantContests.push(luck);
        } else {
            unimportantContests.push(luck);
        }

        totalLuck += luck;
    }

    importantContests.sort((a, b) => b - a);
    totalLuck -= 2 * importantContests.splice(maxLostCount).reduce((sum, contest) => sum += contest, 0);

    return totalLuck;
}