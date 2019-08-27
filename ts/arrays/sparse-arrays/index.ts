export function matchingStrings(strings: string[], queries: string[]): number[] {
    return queries.map((query: string) => strings.filter(s => s === query).length);
}