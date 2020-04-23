## git stash
假设您正在为产品新的功能编写/实现代码，当正在编写代码时，突然出现软件客户端升级。这时，您必须将新编写的功能代码保留几个小时然后去处理升级的问题。在这段时间内不能提交代码，也不能丢弃您的代码更改。 所以需要一些临时等待一段时间，您可以存储部分更改，然后再提交它。在Git中，隐藏操作将使您能够修改跟踪文件，阶段更改，并将其保存在一系列未完成的更改中，并可以随时重新应用。

因为切换分支，不提交的话会删除之前分支的改动，所以使用 git stash 将当前工作的改变隐藏起来，将新的存根推到堆栈上  

1. git stash list
查看已存在的更改列表

2. git stash pop
应用缓存的 stash，恢复到之前的工作目录

3. git stash apply
将堆栈中的 stash 应用到工作目录，但不删除

3. git stash drop stashId
删除 stash 缓存
或者 git stash clear 删除所有

4. git stash branch branchName
从stash创建分支

