function mathDotRound(value: number, significativeNumber: number = 2) {
    const roundSN = Math.pow(10, significativeNumber);
    return Math.round(value * roundSN) / roundSN;
}

export default mathDotRound;
