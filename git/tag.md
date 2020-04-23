## tag 打标签
```
git tag v1.0

-a 添加备注
git tag -a tagName -m "my tag"

git show tagName 查看tag的详细信息

给指定commit 加tag
git tag -a tagName commitId -m "my tag"

同步服务器
git push origin tagName

切换 tag
git checkout tagName

删除 tag
git tag -d tagName

远端删除
git push origin :refs/tags/tagName
```
