function lemonadeChange(bills: number[]): boolean {
    const COST = 5
    const wallet = {}
    interface TIsPayable {
        isPayable: boolean
        money_list: number[]
    }
    const IsPayable = (wallet: object, change: number): TIsPayable => {
        const money_list = []
        const wallet_list = []
        for (let bill of [20, 10, 5]) {
            for (let i = 0; i < wallet[bill]; i++) {
                wallet_list.push(bill)
            }
        }
        for (let bill of wallet_list) {
            if (change > 0) {
                if (change >= bill) {
                    change -= bill
                    money_list.push(bill)
                }
            }
            else break
        }
        return {
            isPayable: change === 0,
            money_list
        }
    }
    for (let bill of bills) {
        if (bill in wallet) wallet[bill]++
        else wallet[bill] = 1
        const change = bill - COST
        if (change > 0) {
            const { isPayable, money_list } = IsPayable(wallet, change)
            if (isPayable) {
                for (let money of money_list) {
                    wallet[money] -= 1
                }
            }
            else return false
        }
    }
    return true
};
