const path = require('path')

process.env.UNI_USING_VUE3 = true
process.env.UNI_USING_VUE3_OPTIONS_API = true
module.exports = {
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  css: {
    // requireModuleExtension: true, // 是否开启CSSmodule并保留xxx.module.css后缀
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/styles/variables.sass` 这个文件
        prependData: `
          @import "~@/styles/variables/index.scss";
        `, //引入全局变量
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `
          @import "~@/styles/variables/index.scss";
        `, //引入全局变量
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json'],
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
  },
  transpileDependencies: ['@dcloudio/uni-ui'],
}
