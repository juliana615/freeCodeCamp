function telephoneCheck(str) {
    let regex = /(^\d{3}-\d{3}-|^\(\d{3}\)\d{3}-|^\(\d{3}\) \d{3}-|^\d{3} \d{3} |^\d{6}|^1 \d{3}-\d{3}-|^1\(\d{3}\)\d{3}-|^1 \(\d{3}\) \d{3}-|^1 \d{3} \d{3} )\d{4}$/;
    // regex = /^(1?|(1 )?)(^\d{3}-\d{3}-|\(\d{3}\)\d{3}-|^\(\d{3}\) \d{3}-|^\d{3} \d{3} |^\d{6})(\d{4})$/;
    // regex = /^1\(\d{3}\)\d{3}-\d{4}$/;
    return regex.test(str);
}

console.log("*** True Cases ***");
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 (555) 555-5555"));

console.log("*** False Cases ***");
console.log(telephoneCheck("5oo 555 5555"));
console.log(telephoneCheck("500 555 5555;last"));
console.log(telephoneCheck("US500 555 5555"));
console.log(telephoneCheck("2(757)622-7382"));
