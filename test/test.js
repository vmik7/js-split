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
});
