const generator = require('@babel/generator');

// ...

// → 将AST输出为目标代码
const code = generator.default(ast).code;
console.log(code);
