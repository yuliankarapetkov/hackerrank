// Brute force solution
export function minTime1(machines: number[], goal: number): number {
    let items = 0;
    let days = 0;

    while (items < goal) {
        days++;

        for (const machine of machines) {
            if (days % machine === 0) {
                items++;
            }
        }
    }

    return days;
}

// Optimized
export function minTime2(machines: number[], goal: number): number {
    machines.sort();

    const lowRate = machines[0];
    const highRate = machines[machines.length - 1];

    let lowerBound = Math.floor(goal / (machines.length / lowRate));
    let upperBound = Math.floor(goal / (machines.length / highRate)) + 1;

    while (lowerBound < upperBound) {
        const days = Math.floor((lowerBound + upperBound) / 2);
        const total = getNumItems(machines, days);

        if (total >= goal) {
            upperBound = days;
        } else {
            lowerBound = days + 1;
        }
    }

    return lowerBound;
}


function getNumItems(machines: number[], days: number): number {
    let total = 0;

    for (const machine of machines) {
        total += Math.floor(days / machine);
    }

    return total;
}