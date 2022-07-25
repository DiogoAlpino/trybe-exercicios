function palindromo (nome) {
let reverse = nome.split("").reverse().join("");
if (reverse === nome) {
    return true;
}
else {
    return false;
}
}

console.log(palindromo("palavra"));