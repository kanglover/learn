/**
 * require("@babel/traverse").default(ast, visitors)
 * ast：抽象语法树AST
 * visitors：访问者
 */

require("@babel/traverse").default(ast, {
    /** - 1.进入节点时调用 */
    enter(path) {
        console.log('__enter__');
    },
    /** - 2.离开节点时调用 */
    exit(path) {
        console.log('__exit__');
    },
    /** - 3.当遍历到指定节点类型时调用，比如这里是：FunctionDeclaration（函数声明） */
    FunctionDeclaration(path) {
        console.log('__FunctionDeclaration__');
    },
    /** - 4.你可以单独监听某个节点类型的进入或者离开 */
    FunctionDeclaration: {
        enter(path) {
        console.log('__FunctionDeclaration_enter_');
        },
        exit(path) {
        console.log('__FunctionDeclaration_exit_');
        },
    },
    /** - 5.当遍历到 FunctionDeclaration|ReturnStatement 节点时调用 */
    ['FunctionDeclaration|ReturnStatement'](path) {
        console.log('__FunctionDeclaration|ReturnStatement');
    }
});
