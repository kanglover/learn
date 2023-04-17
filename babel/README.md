Babel 的编译流程分为三步：Parse → Transform → Generate

解析阶段：通过 @babel/parser 将源码转成 AST；
转换阶段：通过 @babel/traverse 遍历AST，并调用 visitor 函数修改 AST，期间涉及到 AST 的判断、创建、修改等，这时候就需要 @babel/types 了，当需要批量创建 AST 的时候可以使用 @babel/template 来简化 AST 创建逻辑；
生成阶段：通过 @babel/generate 将 AST 输出为目标代码字符串，同时生成 sourcemap；
中途遇到错误想打印代码位置的时候，使用 @babel/code-frame 包
Babel 的整体功能通过 @babel/core 提供，基于上面的包完成 Babel 整体的编译流程，并实现插件功能。
