# Github仓库重命名

## 1.在Github上重命名仓库

跑到自己的仓库那,找到 `Setting` 的 `tag` , 点进去后 `Options` 的 `Settings` 就可以设定 `Repository name`.

## 2.修改本地仓库信息

因为远程的仓库名改了, 本地的对应仓库名也要改. 

##### 1.检查当前远程仓库的信息 

```bash
$ git remote -v 
```

  列出所有远程仓库信息, 包括网址.

##### 2.修改本地对应的远程仓库的地址 

  修改完后使用 `git remote -v` 检查一下本地是否修改成功

```bash
$ git remote set-url origin git@github.com:username/newrepo.git
```

##### 3.拉取最新的仓库

```bash
$ git pull
``` 

拉取完整的远程仓库，这一步是为了避免提交代码的时候出错，执行这一步的时候可能会有以下提示：

```bash
* [new branch]      master     -> origin/master
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

```

如果遇到这个提示可以直接使用下面这个命令：

```bash
git branch --set-upstream-to=origin/master
```

现在你可以再次愉快的使用git了 O(∩_∩)O~~

### END!
