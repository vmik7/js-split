const { resourceLimits } = require("worker_threads");

function split(str, div) {
    
    //  extreme cases
    if (div === undefined) {
        return [str]; 
    }
    if (div === '') {
        let result = [];
        for (let char of str) {
            result.push(char);
        }
        return result;
    }

    // resulting array
    let result = [];

    // new string with a div-prefix
    let s = div + str;

    // calc prefix-function array
    let p = [0];
    for (let i = 1; i < s.length; i++) {
        let j = p[i - 1];
        while (j >= 0) {
            if (s[i] === s[j]) {
                p[i] = j + 1;
                break;
            } else if (j === 0) {
                p[i] = 0;
                break;
            }
            j = p[j - 1];
        }
    }

    // search for div-occurrences
    let start = div.length;
    for (let i = start; i < s.length; i++) {
        if (p[i] === div.length) {
            result.push(s.slice(start, i - div.length + 1));
            start = i + 1;
        }
    }
    result.push(s.slice(start));

    // return value
    return result;
}

module.exports.split = split;
