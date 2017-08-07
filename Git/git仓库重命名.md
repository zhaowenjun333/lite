# Github仓库重命名

## 1.在Github上重命名仓库

跑到自己的仓库那,找到 `Setting` 的 `tag` , 点进去后 `Options` 的 `Settings` 就可以设定 `Repository name`.

## 2.修改本地仓库信息

因为远程的仓库名改了, 本地的对应仓库名也要改. 

1. `git remote -v <br>`
   列出所有远程仓库信息, 包括网址.

2. `git remote set-url origin git@github.com:username/newrepo.git` <br>
   修改远程仓库对应的网址.

3. `git pull` <br>
   拉取完整的远程仓库，在这一部的时候可能会有以下提示：

```shell
* [new branch]      master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

```

如果遇到这个提示可以直接使用下面这个命令：

```shell
git branch --set-upstream-to=origin/master
```

现在你可以再次愉快的使用git了 O(∩_∩)O~~

### END!



## 网上其他方法记录

这个方法有点坑，容易出错！ <br> 
这个方法有点坑，容易出错！ <br>
这个方法有点坑，容易出错！ <br>

方法如下：

- `git remote rm origin` <br>
删掉本地的远程仓库信息

- `git remote add origin git@github.com:username/newrepo.git` <br>
添加新的远程仓库

- `git branch –set-upstream-to=origin/master master`