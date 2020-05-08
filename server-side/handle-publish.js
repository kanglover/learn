const shell = require('shelljs');

// 拷贝到dist目录下
shell.cp('-R', '../public/', '../dist/');

shell.cp('-R', '../views/', '../dist/');
