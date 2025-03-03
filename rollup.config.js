const commonjs = require("@rollup/plugin-commonjs");
const {nodeResolve} = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const builtins = require("rollup-plugin-node-builtins");

module.exports = {
	input: "index.js",
	output: {
		file: "linter.js",
		format: "umd",
		exports: "named",
		name: "eslint",
		intro: "if (!global) { var global = globalThis || window; }",
	},
	plugins: [
		commonjs({
			ignoreGlobal: true,
			requireReturnsDefault: "preferred",
		}),
		json(),
		builtins(),
		nodeResolve({
			preferBuiltins: false
		}),
	],
};
