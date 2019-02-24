/* eslint-disable */

const presets = [
  ["@babel/preset-env", {
    targets: {
      browsers: "> 1%"
    }
  }],
  "@babel/preset-react",
  "@babel/preset-flow"
];

const plugins = [
  ["@babel/plugin-transform-runtime", { "regenerator": true }],
  "@babel/plugin-proposal-function-bind",
  "@babel/plugin-proposal-export-namespace-from",
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-object-rest-spread",
  ["@babel/plugin-proposal-class-properties",{ "loose": true }]
];

module.exports = {
  presets,
  plugins
}
