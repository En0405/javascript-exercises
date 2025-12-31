const repeatString = function(texto, repeticiones) {
    if (repeticiones<0) {
        return "ERROR";
    }
    let textoRepetido = "";
    for (let i = 0; i < repeticiones; i++) {
        textoRepetido += texto;      
    }
    return textoRepetido
};
// Do not edit below this line
module.exports = repeatString;
