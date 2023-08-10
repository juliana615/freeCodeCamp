function rot13(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlphabet(str[i])) {
            res += crot13(str[i]);
        } else {
            res += str[i];
        }
    }
    return res;
}

function isAlphabet(char) {
    let regex = /[a-zA-Z]/;
    return regex.test(char);
}

function crot13(char) {
    let az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let idx = az.match(char).index;
    let idx_new = (idx + 26 - 13) % 26;
    return az[idx_new];
}

console.log(rot13("SERR PBQR PNZC"));