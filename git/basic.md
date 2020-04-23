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