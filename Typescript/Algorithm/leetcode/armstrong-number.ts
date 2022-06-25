function isArmstrong(n: number): boolean {
    return n === n.toString().split("").reduce((acc, cur) => (acc + parseInt(cur) ** n.toString().length), 0)
};
