const parser = require('@babel/parser');

// → 定义一段代码字符串
const codeString = `function square(n) {
  return n * n;
}`;

// → 解析代码字符串
const ast = parser.parse(codeString, {
  sourceType: 'script', // module unambigious
  plugins: ['jsx', 'typescript'],
});

// → 输出ast
console.log(JSON.stringify(ast, null, 4));
