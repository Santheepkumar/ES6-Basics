function deposit(...money) {

    console.log(money)

    let balance = 0;
    for (let i = 0; i < money.length; i++) {
        balance += money[i];
    }
    return balance;
}
console.log(deposit(100, 40, 50, 45))

let addMoney = [34, 56, 23, 64, 64]


console.log(Math.max(...addMoney))