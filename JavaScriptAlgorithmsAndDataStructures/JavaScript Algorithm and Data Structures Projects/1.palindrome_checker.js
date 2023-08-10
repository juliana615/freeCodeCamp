function palindrome(str) {
    // remove all non-alphanumeric characters
    let regex = /\W*/g;
    // let str_striped = String.toLowerCase(str.replace(regex, '').replace('_', ''));
    let str_striped = str.replace(regex, '').replace('_', '').toLowerCase();
    let len = str_striped.length;
    // console.log(str_striped, len);

    // palindrome checker
    // console.log(len/2);
    for (let i = 0; i < (len / 2); i++ ) {
        // console.log(str_striped[i], str_striped[len - i - 1]);
        if (str_striped[i] != str_striped[len - i - 1]) {
            return false;
        }
    }
    return true;
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));