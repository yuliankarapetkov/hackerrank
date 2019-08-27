export function rotLeft(array: number[], rotateLeftCount: number): number[] {
    for (let i = 0; i < rotateLeftCount; i++) {
        array.push(array.shift());
    }
    
    return array;
}