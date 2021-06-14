const { split } = require('./split');

let str = '.a.b.c.d.efg.';
console.log('Native String.split:', str.split('.'));
console.log('My custom split:', split(str, '.'));
