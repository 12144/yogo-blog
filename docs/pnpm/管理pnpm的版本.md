# 管理pnpm的版本

我们经常会遇到这种情况，在开发多个项目时，不同项目可能使用不同的pnpm版本，全局只能安装一种版本的pnpm，有两种方法可以避免每次重新安装

## 从网络上下载指定版本pnpm并执行

可以使用`npx`命令，如`npx pnpm@6.32.11 install`

或者`pnpm dlx`命令，也有同样的效果，[官网文档](https://pnpm.io/cli/dlx)

## 使用corepack管理



corepack是node提供的工具用于管理`pnpm`和`yarn`包管理器，具体使用参考[pnpm官网文档](https://pnpm.io/installation#using-corepack)和[node官网文档](https://nodejs.org/api/corepack.html)