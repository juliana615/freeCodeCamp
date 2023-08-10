const unit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
];

function checkCashRegister(price, cash, cid) {
    let res = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    }

    let change = cash - price;
    if (change < 0) {
        return res;
    }

    let cid_total = 0;
    for (let i = 0; i < cid.length; i++) {
        cid_total += cid[i][1];
    }

    if (change > cid_total) {
        return res;
    } else if (change == cid_total) {
        res.status = "CLOSED";
        res.change = cid;
        return res;
    } else {
        let array_num = parseInt(change / unit[0][1]);
        // console.log("array_num:", array_num);
    
        let flag = Array(array_num + 1).fill(0);
        let freq = Array(array_num + 1).fill(0);
        let g = Array(array_num + 1).fill(0);
    
        flag[0] = 1;
        for (let j = unit.length - 1; j >= 0; j--) {
            let unit_count = parseInt(unit[j][1] / 0.01);
            let amount = parseInt(cid[j][1] / unit[j][1]);
            // console.log(unit_count, amount);
            for (let i = 0; i < array_num; i++) {
                if (flag[i] && freq[i] < amount && i + unit_count <= array_num && !flag[i + unit_count]) {
                    flag[i + unit_count] = 1;
                    freq[i + unit_count] = freq[i] + 1;
                    g[i + unit_count] = unit_count;
                }
            }
            freq.fill(0);
        }
        if (flag[array_num]) {
            res.status = "OPEN";
            let stack = [];
            while(array_num > 0) {
                stack.push(g[array_num]);
                array_num -= g[array_num];
            }
            let grouped = stack.reduce((res, num) => ({
                ...res,
                [num]: [...(res[num] || []), num]
            }), {});
            res.change = Object.entries(grouped).map(([key, value]) => [unit.find(item => item[1] == key / 100)[0], value.reduce((sum, num) => sum + num) / 100]).reverse();
            return res;
        } else {
            return res;
        }
    }
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
/*

const unit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
];

function checkCashRegister(price, cash, cid) {
    let res = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    }

    let change = cash - price;
    console.log(change);
    if (change < 0) {
        return res;
    }


    let cid_total = 0;
    for (let i = 0; i < cid.length; i++) {
        cid_total += cid[i][1];
    }

    // Check if there's any drawer match for change
    let pair = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = pair.length - 1; i >= 0 ; i--) {
        if (change > cid[i][1]) {
            pair[i] = cid[i][1] / unit[i][1];
            change -= cid[i][1];
        } else {
            pair[i] = Math.floor(change / unit[i][1]);
            change -= Math.floor(change / unit[i][1]) * unit[i][1];
        }
    }

    console.log(pair, change);

    if (change == 0) {
        for (let i = 0; i < pair.length; i++) {
            if (pair[i] != 0) {
                res.change.push([unit[i][0], unit[i][1] * pair[i]]);
            }
        }
        // If cash-in-drawer is equal to the change due.
        if (res.change === cid) {
            res.status = "CLOSED";
        }
        // Otherwise
        else {
            res.status = "OPEN";
        }
    }
    // If cash-in-drawer is less than the change due, or if you cannot return the exact change.
    else {

    }

    return res;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

*/