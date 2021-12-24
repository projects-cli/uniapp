<h3>一、项目配置</h3>

- 安装 node >= 14
- 安装 yarn npm i -g yarn tip: 尽量使用 yarn
- 安装 xxx 小程序开发者工具
- 安装相关插件(vscode)

  - 自动格式化 eslint

    - Prettier - Code formatter [vscode 地址](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - ESLint [vscode 地址](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

  - 全局提示样式
    - scss [vscode 地址](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

<h3>二、项目启动</h3>

- git clone http://192.168.3.67:8099/wanjun/lyw-uniapp.git
- yarn
- yarn xxx 详细请看 package.json

  - app-plus app 平台生成打包资源（支持 npm run build:app-plus，可用于持续集成。不支持- - run，运行调试仍需在 HBuilderX 中操作）
  - h5 H5
  - mp-alipay 支付宝小程序
  - mp-baidu 百度小程序
  - mp-weixin 微信小程序
  - mp-toutiao 字节跳动小程序
  - mp-lark 飞书小程序
  - mp-qq qq 小程序
  - mp-360 360 小程序
  - mp-kuaishou 快手小程序
  - quickapp-webview 快应用(webview)
  - quickapp-webview-union 快应用联盟
  - quickapp-webview-huawei 快应用华为

<h3>三、项目开发流程</h3>

[详细操作请查看](./doc/Git使用规范.md)

<h3>四、技术栈</h3>
<h5>vue-query</h5>

[地址](https://vue-query.vercel.app/#/) 提供了用于在 Vue 中获取、缓存和更新异步数据的钩子

<h5>vueuse 暂未使用</h5>

[地址](https://github.com/vueuse/vueuse) 一个基于 Composition API 的实用函数集合。在继续之前，我们假设您已经熟悉 Composition API 的基本思想。

<h5>vuex</h5>

[地址](https://next.vuex.vuejs.org/zh/index.html) 一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

<h3>五、项目结构</h3>

```
public
    |--images                  // 图片静态资源
src
    |--mobile
    |--public               // css、js、静态文件等
        |--common
            |--less         // less文件
            |--css          // less文件编译成功之后的存放位置
    |--views                // pc端项目
        |--common
        |--en               //英文页面
        |--zh-cn            // 中文页面
            |--mobile
                |--landing  // langding页
            |-- partials    // 公用组件
                |--my_nav.ejs// 头部导航栏
routes.js                   // pc端路由

```
