## merge
git merge命令用于将两个或两个以上的开发历史加入(合并)一起   
```
git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
    [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
    [--[no-]allow-unrelated-histories]
    [--[no-]rerere-autoupdate] [-m <msg>] [<commit>…​]
git merge --abort
git merge --continue
```
1. --ff(fast-forward)  
Git 合并两个分支时，如果顺着一个分支走下去可以到达另一个分支的话，那么 Git 在合并两者时，只会简单地把指针右移，叫做“快进”（fast-forward）不过这种情况如果删除分支，则会丢失merge分支信息。

2. --no-ff  
关闭fast-forward模式，在提交的时候，会创建一个merge的commit信息，然后合并的和master分支
merge的不同行为，向后看，其实最终都会将代码合并到master分支，而区别仅仅只是分支上的简洁清晰的问题，然后，向前看，也就是我们使用reset 的时候，就会发现，不同的行为就带来了不同的影响

3. --squash  
把一些不必要commit进行压缩，比如说，你的feature在开发的时候写的commit很乱，那么我们合并的时候不希望把这些历史commit带过来，于是使用–squash进行合并，此时文件已经同合并后一样了，但不移动HEAD，不提交。需要进行一次额外的commit来“总结”一下，然后完成最终的合并。

总结： git merge 不会显示 feature 分支，只保留单条分支记录
git merge --no-ff 可以保留之前的分支记录
git merge --squash 将多个分支历史压缩为一次