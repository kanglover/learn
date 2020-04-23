## git checkout
1. checkout 最常用的用法是工作分支切换  
用法1：切换分支
```
切换分支：git checkout branchName

克隆仓库后，会默认新建master本地分支，想切换到newBranch远程分支:
1 git checkout -b newBranch origin/newBranch
2 git branch newBranch origin/newBranch
```
用法2：以commit切换分支
```
git checkout -b <new_branch> [<start_point>]
```
以某次 commit 创建新分支，start_point 为 commitId

用法3：切换游离分支
```
git checkout --datch <branch>
```
切换到分支的游离状态，默认以该分支下的最后一次提交ID

用法4：强制创建分支
```
git checkout -B <branch>
```
覆盖之前创建的分支

2. checkout 检出文件(改变HEAD指向)
用法1
```
git checkout [-q] [<commit>] [--] <paths>
```
如果不填写commit id，默认会从暂缓区检出该文件，如果暂缓区为空，则该文件会回滚到最近一次的提交状态。<commit>既可以是某一个具体的commit hash值，也可以是某个分支名称，tag名称。   
当执行 "git checkout ." 或者 "git checkout -- <file>" 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。   
当执行 "git checkout HEAD ." 或者 "git checkout HEAD <file>" 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。

3. 创建分支
```
git checkout --orphan <new_branch>
```
基于当前所在分支新建一个赤裸裸的分支，没有任何的提交历史，但是当前分支的内容一一俱全。

4. 合并分支
```
git checkout --merge <branch>
```
切换分支的同时将当前分支的修改内容同步到切换的分支下

5. 比较分支差异
```
git checkout -p <branch>
```
这个命令主要用来比较两个分支间的差异内容，并提供交互式的界面来选择进一步的操作。这个命令不仅可以比较两个分支间的差异，还可以比较单个文件的差异哦！