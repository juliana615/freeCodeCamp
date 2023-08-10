const ROMAN_NUMERALS = {
    '1000': 'M',
    '900': 'CM',
    '500': 'D',
    '400': 'CD',
    '100': 'C',
    '90': 'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9': 'IX',
    '5': 'V',
    '4': 'IV',
    '1': 'I'
}

function convertToRoman(num) {
    let roman_num = '';
    
    const keys = Object.keys(ROMAN_NUMERALS).reverse();
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        // console.log(key, ROMAN_NUMERALS[key]);

        let digit = Math.floor(num / key);
        num %= key;
        // console.log(digit);

        for (let j = 0; j < digit; j++) {
            roman_num += ROMAN_NUMERALS[key];
        }
    }

    return roman_num;
}

console.log(convertToRoman(4));
