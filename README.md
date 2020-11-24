# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### create-react-app 配置 antd 框架 按需加载如下
- react脚手架（create-react-app）配置antd中css按需加载的坑
- 1、在项目的根目录下创建 .babelrc 的文件 
```
    
      1、$ touch .babelrc 
        
      // .babelrc
          {
            "presets": [
              "react-app"
            ],
            "plugins": [
              ["import", { "libraryName": "antd", "style": "css" }]
            ]
          }

     2、删除 package.json 下面的文件内容
        "babel": {
            "presets": [
              "react-app"
            ]
          }

     3、如果出现以下的报错信息
        Failed to compile
        ./src/index.tsx
        Error: Multiple configuration files found. Please remove one:
         - package.json
         - /Users/lm259/Codes/PrivateKit/ReactKit/middletaiwants/.babelrc
        from /Users/lm259/Codes/PrivateKit/ReactKit/middletaiwants
            at Array.reduce (<anonymous>)
            at loadOneConfig.next (<anonymous>)
            at findRelativeConfig.next (<anonymous>)
            at buildRootChain.next (<anonymous>)
            at loadPrivatePartialConfig.next (<anonymous>)

     4、解决方法
        1、还没有完，此时如果运行项目，浏览器还会报错（天了噜，真tm想弃用....)为什么会报错呢？因为上面一步开启了使用.babelrc文件，但是.babelrc的配置不正确，我们需要修改（为什么不正确呢？因为creat-react-app有一些默认的babel配置放到了package.json中）

        2、修改如下文件 webpack.config.js
            -1、找到  babelrc: false, 改成  babelrc: true, 此时再重新运行 $ yarn start 然后再打开浏览器查看就成功了 

        
```

### MacBook Pro 系统下，如果运行的时候，发现原有的商品被占用时，需要手动清除占用的端口，方法如下
- Mac系统查看端口占用和杀死进程
- lsof -i tcp:端口号
    > lsof -i tcp:8080
    +  On Mac OS X you need the following command:
    >  sudo lsof -t -i tcp:4200 | xargs kill -9


### 打开当前文件所在的目录
- open .

### mac下mysql提示command not found解决
```
问题描述

输入mysql -u root -p会出现：zsh: command not found: mysql的提示，此时需要配置环境变量。

解决方法一

1 .打开终端,输入： cd ~

2.输入：sudo vim .bash_profile

回车执行，需要输入root用户密码。sudo是使用root用户修改环境变量文件。

3.输入i进入编辑模式，然后输入：export PATH=${PATH}:/usr/local/mysql/bin

然后esc退出insert状态，并在最下方输入:wq保存退出。

4.输入：source .bash_profile

回车执行，运行环境变量。

5.vi ~/.zshrc，在这里面往export PATH=后添加：

export PATH=${PATH}:/usr/local/mysql/bin

保存后 source ~/.zshrc

f执行命令：mysql -u root -p即可



