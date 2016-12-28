
const context = require.context('./', true, /\.js$/);

export default context.keys().reduce((prev, file) => {
  prev[file.replace(/\.\/|\.js/g, '')] = context(file).default;
  return prev;
}, {});
