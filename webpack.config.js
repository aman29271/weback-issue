const { resolve } = require("path");
module.exports = [
    {
        entry: resolve(__dirname, "src", "a.js"),
        output: {
            path: resolve(__dirname, "public"),
            filename: "a.js",
        },
    },
    {
        entry: resolve(__dirname, "src", "b.js"),
        output: {
            path: resolve(__dirname, "public"),
            filename: "b.js",
        },
    },
];
