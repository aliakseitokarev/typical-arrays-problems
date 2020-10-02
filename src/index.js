
exports.min = function min (array) {
    let result = 0;
    if (array && array.length) {
        array.forEach(element => (result > element) ? result = element : result);
    }
    return result;
}

exports.max = function max (array) {
    let result = 0;
    if (array && array.length) {
        array.forEach(element => (result < element) ? result = element : result);
    }
  return result;
}

exports.avg = function avg (array) {
    let result = 0;
    if (array && array.length) {
        array.forEach(element => {
            result += element; 
        });
        result /= array.length;
    }
  return result;
}
