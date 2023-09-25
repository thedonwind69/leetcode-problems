function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 1],
      ["NICKEL", 5],
      ["DIME", 10],
      ["QUARTER", 25],
      ["ONE", 100],
      ["FIVE", 500],
      ["TEN", 1000],
      ["TWENTY", 2000],
      ["ONE HUNDRED", 10000]
    ];
  
    let changeDue = (cash - price) * 100; // Convert to cents for precision
    let changeInDrawer = 0;
  
    for (let i = 0; i < cid.length; i++) {
      const [currency, amount] = cid[i];
      const [unit, value] = currencyUnit[i];
      changeInDrawer += amount * 100; // Convert to cents for precision
    }
  
    if (changeDue > changeInDrawer) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (changeDue === changeInDrawer) {
      return { status: "CLOSED", change: cid };
    } else {
      let changeToReturn = [];
  
      for (let i = cid.length - 1; i >= 0; i--) {
        let [currentCurrency, amount] = cid[i];
        let [unit, value] = currencyUnit[i];
  
        // Calculate how many units of current currency can be given
        let unitsToGive = Math.floor(amount * 100 / value);
  
        if (changeDue >= value && unitsToGive > 0) {
          // Calculate how much change to give in this currency
          let changeInCurrency = Math.min(
            unitsToGive,
            Math.floor(changeDue / value)
          ) * value;
  
          // Update changeDue and amount in the drawer
          changeDue -= changeInCurrency;
          amount -= changeInCurrency / 100; // Convert back to dollars
  
          // Push the currency and amount to changeToReturn
          changeToReturn.push([currentCurrency, changeInCurrency / 100]); // Convert back to dollars
        }
      }
  
      if (changeDue === 0) {
        // If changeDue is reduced to 0, return OPEN status with changeToReturn
        return { status: "OPEN", change: changeToReturn };
      } else {
        // If changeDue is not reduced to 0, return INSUFFICIENT_FUNDS
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
  }
  
  
var answer = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(answer);