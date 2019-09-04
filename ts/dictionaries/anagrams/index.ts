export function countAnagrams(str: string): number {
    const dictionary = {};
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            const transformed = str.slice(i, j).trim().split('').sort().join('');

            if (dictionary[transformed]) { 
                count += dictionary[transformed];
                dictionary[transformed]++;
            } else {
                dictionary[transformed] = 1;
            }     
        }            
    }

    return count;
}

