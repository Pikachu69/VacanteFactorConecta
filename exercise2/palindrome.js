function palindrome(cadena) {
    let a1 = new Array();
    let s="";
    let p="";
    a1 = cadena.split(" ");
    for(let i=0;i<a1.length;i++) {
        s += a1[i];
    }

    // console.log(s.length);

    for(let i=0;i<s.length;i++) {
        p += s[(s.length-1)-i];
    }

    console.log(p);
    console.log(s);

    if (p==s) {
        return true;
    } else return false;
}

module.exports = palindrome;