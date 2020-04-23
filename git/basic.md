## git add

## git status

##　git diff
* 尚未缓存的改动：git diff
* 查看已缓存的改动： git diff --cached
* 查看已缓存的与未缓存的所有改动：git diff HEAD
* 显示摘要而非整个 diff：git diff --stat

## git commit
```
git commit -am == git add + commit

git commit --amend 覆盖上次提交信息
git commit --amend 之后输入 i 选择需要修改的信息完成后按esc，最后输入:wq+ enter
或者git commit --amend -m "xx"
```

## git rm
git rm <file>

如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 -f
git rm -f <file>

如果把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除，使用 --cached 选项即可
git rm --cached <file>

## git mv
git mv 命令用于移动或重命名一个文件、目录、软连接。
```
git mv text.txt mydir
git mv README  README.md
```