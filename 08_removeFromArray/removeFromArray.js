const removeFromArray = function(arreglo, ...agrumentos) {
    return arreglo.filter((elemento) => !agrumentos.includes(elemento));
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
