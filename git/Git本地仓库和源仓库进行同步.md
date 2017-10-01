# 保持fork后的项目和上游仓库同步

## 命令行上操作

### 配置远程库

> 查看远程状态

```bash
git remote -v
```

> 添加一个别名为 upstream（上游）的地址，指向之前 fork 的原仓库地址

```bash
git remote add upstream https://github.com/hua03/lite.git
```

> 查看状态确认是否配置成功

### 同步fork

> 从上游仓库 fetch 分支和提交点，提交给本地 master

```
git fetch upstream
```

> 切换到本地主分支(如果不在的话)

```
git checkout master
```

> 把 upstream/master 分支合并到本地 master 上，这样就完成了同步

```
git merge upstream/master
```

## 在Github上操作

在Github上，你可以直接拉取fork源的修改

![2017-10-01-13-45-43](//opd59bmxu.bkt.clouddn.com/2017-10-01-13-45-43.png)

![2017-10-01-13-46-50](//opd59bmxu.bkt.clouddn.com/2017-10-01-13-46-50.png)

![2017-10-01-13-47-16](//opd59bmxu.bkt.clouddn.com/2017-10-01-13-47-16.png)

完成这几步之后就可以将你Github上的仓库同步为最新的了，中间可能会出现合并冲突，暂时没遇到，以后有机会再写下来。
