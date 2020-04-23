## reset 用法
git reset 命令一般用于私有分支上的版本回退

用法：
```
git reset [--hard|soft|mixed|merge|keep] [<commit>或HEAD]
```
将当前的分支重设(reset)到指定的<commit>或者HEAD(默认，如果不显示指定<commit>，默认是HEAD，即最新的一次提交)，并且根据[mode]有可能更新索引和工作目录。mode的取值可以是hard、soft、mixed、merged、keep。   
git add 进入索引后想回退取消，则可以使用 git reset HEAD <file>

1. --hard （修改版本库，重置缓存区和工作区）  
--hard HEAD～1 (或是版本号)意为将版本库回退1个版本，但是不仅仅是将本地版本库的头指针全部重置到指定版本，也会重置暂存区，并且会将工作区代码也回退到这个版本  

一般在使用 push 命令之后，想要回退版本时使用该命令

2. --mixed/不加参数 （修改版本库，重置缓存区，保留工作区）  
reset 如果不加参数，那么默认使用 --mixed 参数。它的行为是：保留工作目录，并且清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 reset 所导致的新的文件差异，都会被放进工作目录。  

一般在使用 add 命令之后，想要撤销缓存区使用该命令

3. --soft （修改版本库，保留缓存区，保留工作区）  
--soft HEAD～1 意为将版本库软回退1个版本，所谓软回退表示将本地版本库的头指针全部重置到指定版本，且将这次提交之后的所有变更都移动到暂存区。  

一般在使用 commit 提高到版本库，使用该命令，之后还可以继续 commit 提交

4. --merge (保留工作区和缓存区之前的差异)   
保留工作区，但是会舍弃缓存区的差异，index 复原到 HEAD~n  
git pull完后，发现这次拉取下来的修改不满意，想要回滚到git pull之前的状态，从前面的介绍知道，我们可以执行git reset --hard ORIG_HEAD，但是这个命令有个副作用就是清空工作区，即丢弃本地未使用git add的那些改变。为了避免丢弃工作区中的内容，可以使用git reset --merge ORIG_HEAD，注意其中的--hard 换成了 --merge，这样就可以避免在回滚时清除工作区。

5. --keep （保留工作区和 HEAD 之间的差距）  
保留工作区和缓存区的修改，将缓存区复原到 HEAD~n  
假设你正在编辑一些文件，并且已经提交，接着继续工作，但是现在你发现当前在工作区中的内容应该属于另一个分支，与之前的提交没有什么关系。此时，可以开启一个新的分支，并且保留着工作区中的内容。   
```
$ git tag start 
$ git checkout -b branch1 
$ edit 
$ git commit ...                            (1) 
$ edit 
$ git checkout -b branch2                   (2) 
$ git reset --keep start                    (3)
```
(1) 这次是把在branch1中的改变提交了。
(2) 此时发现，之前的提交不属于这个分支，此时新建了branch2分支，并切换到了branch2上。
(3) 此时可以用reset --keep把在start之后的提交清除掉，但是保持工作区不变。
