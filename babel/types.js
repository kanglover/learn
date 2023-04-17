const parser = require('@babel/parser');
const traverse = require('@babel/traverse');
const t = require('@babel/types');

const codeString = `function square(n) {
  return n * n;
}`;

// → 解析代码字符串
const ast = parser.parse(codeString, {
  sourceType: 'script', // module unambigious
  plugins: ['jsx', 'typescript'],
});

// → 遍历节点
traverse.default(ast, {
  Identifier(path) {
    // 判断是否是 name 为 n 的标志符
    if (t.isIdentifier(path.node, { name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// → 输出ast
console.log(JSON.stringify(ast, null, 4));
