export function checkMagazine(magazine: string[], note: string[]): void {
    const magazineMap = toWordMap(magazine);
    const noteMap = toWordMap(note);

    for (let word in noteMap) {
        if (!magazineMap[word] || magazineMap[word] < noteMap[word]) {
            console.log('No');
            return;
        }
    }

    console.log('Yes');
}

function toWordMap(words: string[]): any {
    const wordMap = {};

    for (let word of words) {
        if (wordMap[word]) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    }

    return wordMap;
}