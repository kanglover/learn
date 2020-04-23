## git checkout
1. checkout 最常用的用法是工作分支切换  
```
克隆仓库后，会默认新建master本地分支，想切换到newBranch远程分支:
1 git checkout -b newBranch origin/newBranch
2 git branch newBranch origin/newBranch
```
2. checkout 检出文件
用法1
```
git checkout [-q] [<commit>] [--] <paths>
```
如果不填写commit id，默认会从暂缓区检出该文件，如果暂缓区为空，则该文件会回滚到最近一次的提交状态。<commit>既可以是某一个具体的commit hash值，也可以是某个分支名称，tag名称。
