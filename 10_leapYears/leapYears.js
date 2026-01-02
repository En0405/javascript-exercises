const leapYears = function(ano) {
    if (ano%4==0) {
        if (ano%400 == 0) {
            return true;
        }
        if (ano%100 == 0) {
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
