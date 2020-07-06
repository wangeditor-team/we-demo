# wangEditor next demo

用于安装 npm 包，功能测试

## 安装

### 安装线上 npm 包

`npm i @wangeditor-team/we-next --save` ，确保安装的是**最新**版本

PS：如果安装的不是最新版本，可以手动修改 `package.json` 的版本号，再重新安装。

### 安装本地 npm 包

进入编辑器源码目录，运行 `npm link` ，会得到一个本地的 npm 包地址，如 `/Users/xxx/.nvm/versions/node/v14.3.0/lib/node_modules/@wangeditor-team/we-next` ，将其拷贝下来。

进入该项目目录，运行 `npm install <刚才拷贝的地址>` ，即可安装完成

## 修改代码

可按自己需求，修改、添加代码

## 运行

`npm run dev`
