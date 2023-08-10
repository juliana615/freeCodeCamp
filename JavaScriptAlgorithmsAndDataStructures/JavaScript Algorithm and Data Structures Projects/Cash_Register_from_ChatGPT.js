function checkCashRegister(price, cash, cid) {
    // Calculate the change due
    let changeDue = cash - price;
    
    // Calculate the total cash in drawer
    let totalCashInDrawer = cid.reduce((total, currency) => total + currency[1], 0);
    totalCashInDrawer = parseFloat(totalCashInDrawer.toFixed(2)); // Round to 2 decimal places
    
    // If there is not enough cash in drawer, return "INSUFFICIENT_FUNDS"
    if (totalCashInDrawer < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    // If the amount in drawer is equal to the change due, return "CLOSED"
    if (totalCashInDrawer === changeDue) {
      return {status: "CLOSED", change: cid};
    }
    
    // Create an array to store the change denominations
    let change = [];
    
    // Define the currency units and their values
    const currencyUnits = [
      { name: "ONE HUNDRED", value: 100 },
      { name: "TWENTY", value: 20 },
      { name: "TEN", value: 10 },
      { name: "FIVE", value: 5 },
      { name: "ONE", value: 1 },
      { name: "QUARTER", value: 0.25 },
      { name: "DIME", value: 0.1 },
      { name: "NICKEL", value: 0.05 },
      { name: "PENNY", value: 0.01 }
    ];
    
    // Loop through the currency units from highest to lowest value
    for (let i = 0; i < currencyUnits.length; i++) {
      let currencyName = currencyUnits[i].name;
      let currencyValue = currencyUnits[i].value;
      
      // If the currency unit is larger than the change due, skip it
      if (currencyValue > changeDue) {
        continue;
      }
      
      // Find the available amount of the current currency unit
      let currencyAvailable = cid.find(currency => currency[0] === currencyName)[1];
      
      // Calculate the maximum number of current currency unit that can be used for the change
      let currencyNeeded = Math.floor(changeDue / currencyValue);
      if (currencyNeeded > currencyAvailable) {
        currencyNeeded = currencyAvailable;
      }
      
      // Calculate the value of the current currency being used for the change
      let currencyUsed = parseFloat((currencyValue * currencyNeeded).toFixed(2));
      
      // Update the change due and the cash in drawer
      changeDue -= currencyUsed;
      
      // Store the used currency in the change array
      change.push([currencyName, currencyUsed]);
    }
    
    // If there is still change due, return "INSUFFICIENT_FUNDS"
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    // Return the calculated change
    return {status: "OPEN", change: change};
}

const cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ];
  
  console.log(checkCashRegister(19.83, 100, cid));

  