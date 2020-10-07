# we-next demo

用于安装 npm 包，功能测试

## 安装

### 安装线上 npm 包

`npm install wangeditor@latest --save`

对比 https://www.npmjs.com/package/wangeditor 的版本，确保安装的是**最新**版本。

### 安装本地 npm 包

进入编辑器源码目录，运行 `npm link` ，会得到一个本地的 npm 包地址，如 `/Users/xxx/.nvm/versions/node/v14.3.0/lib/node_modules/wangeditor` ，将其拷贝下来。

进入该项目目录，运行 `npm install <刚才拷贝的地址>` ，即可安装完成

## 修改代码

可按自己需求，修改、添加代码

## 运行

- 启动本地服务 `npm run dev`
- 打包 `npm run prod`

-------

## 用于 we-next 的 github actions

代码见 https://github.com/wangeditor-team/we-next/blob/master/.github/workflows/npm-publish.yml

we-next 发布到 npm 之后，会自动下载该项目，安装最新版插件，打包并发布到服务器。
