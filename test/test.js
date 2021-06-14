const { assert } = require("chai");
const { split } = require("./../split");

describe("Split", function () {
    describe("divider: 1 character", function () {
        it('".a.b.c.d.efg.", divider: "."', function () {
            let str = ".a.b.c.d.efg.";
            assert.deepEqual(str.split("."), split(str, "."));
        });
        it('"abracadabra", divider: "a"', function () {
            let str = "abracadabra";
            assert.deepEqual(str.split("a"), split(str, "a"));
        });
        it('"", divider: "."', function () {
            let str = "";
            assert.deepEqual(str.split("."), split(str, "."));
        });
    });

    describe("divider: multi-character", function () {
        it('"aaababaaaaaababbabbabaaaaaababaaaaaaaabab", divider: "bab"', function () {
            let str = "aaababaaaaaababbabbabaaaaaababaaaaaaaabab";
            assert.deepEqual(str.split("bab"), split(str, "bab"));
        });
        it('"abracadabra", divider: "ab"', function () {
            let str = "abracadabra";
            assert.deepEqual(str.split("ab"), split(str, "ab"));
        });
        it('"abracadabra", divider: "abra"', function () {
            let str = "";
            assert.deepEqual(str.split("abra"), split(str, "abra"));
        });
        it('"", divider: "sostenuto"', function () {
            let str = "";
            assert.deepEqual(str.split("sostenuto"), split(str, "sostenuto"));
        });
        it('"", divider: ""', function () {
            let str = "";
            assert.deepEqual(str.split(""), split(str, ""));
        });
        it('"abra", divider: ""', function () {
            let str = "abra";
            assert.deepEqual(str.split(""), split(str, ""));
        });
        it('"", divider: none', function () {
            let str = "";
            assert.deepEqual(str.split(), split(str));
        });
        it('"abra", divider: none', function () {
            let str = "";
            assert.deepEqual(str.split(), split(str));
        });
    });
});
