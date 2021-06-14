function split(str, div) {
    let result = [];
    if (div.length === 1) {
        let cur = '';
        for (let char of str) {
            if (char === div) {
                result.push(cur);
                cur = '';
            }
            else {
                cur += char;
            }
        }
        result.push(cur);
    }
    else {
        
    }
    return result;
}

module.exports.split = split;