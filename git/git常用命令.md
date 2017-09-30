# Git常用命令

## 基础命令

```bash
git --version   #查看版本

git config --global user.email "295506287@qq.com"  #设定邮箱
git config --global user.name "hua03"
```

## 提交修改

```bash
#检查本地仓库的修改
git status  

#查看文件是否有修改
git diff

#准备提交修改
git add .
git add --all
git add -A
git add <fileName>

#提交修改到暂存区
git commit -m 'commit message'

```

## 远程控制

```bash
#新增一个远程链接，origin代表主分支
git remote add origin <Url-From-Github>

#修改本地仓库的远程链接
git remote set-url origin <Url-From-Github>

#查看本地仓库有哪些远程链接
git remote -v

#推送到远程仓库
git push
git push origin master

#拉取远程仓库到本地
git pull
```

## 分支管理

```bash
#查看有哪些分支
git status

#1.列出所有分支
git branch

#2.新增分支b
git branch b

#3.分支重命名
git branch -m <NewBranchName>


#1.切换到分支b
git checkout b 

#2.新增并且换到新分支，
git checkout -b <NewBranchName>


#合并分支
git merge <branch name>

#删除分支
git branch -d <branch name>

#删除远程分支
git push --delete <branch name>
```


## 问题总结

### git pull报错

执行 `git pull`,遇到以下问题

```bash
fatal: refusing to merge unrelated histories
```

> [解决方法](http://blog.csdn.net/u010853261/article/details/51935503)

```
git pull origin master -–allow-unrelated-histories
```

