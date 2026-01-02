const reverseString = function(cadena) {
    let reverseCadena = "";
    for (let i = 1; i < cadena.length+1; i++) {
        reverseCadena+=(cadena.slice(-i,cadena.length-(i-1)));
    }
    return reverseCadena;
};
// Do not edit below this line
module.exports = reverseString;
