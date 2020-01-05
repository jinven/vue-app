// vue.config.js
module.exports = {
    configureWebpack:config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          return {
            // module: {
            //     rules: [
            //         // ... 其它规则省略
            //         {
            //             test: /\.css$/,
            //             use: [
            //                 'vue-style-loader',
            //                 {
            //                     loader: 'css-loader',
            //                     options: {
            //                         // 开启 CSS Modules
            //                         modules: true,
            //                         // 自定义生成的类名
            //                         localIdentName: '[local]_[hash:base64:10]'
            //                     }
            //                 }
            //             ]
            //         }
            //     ]
            // },
            plugins: [
              // new MyAwesomeWebpackPlugin()
            ],
            // externals: {
            //     'vue': 'Vue',
            //     'lodash': 'lodash',
            //     'vue-router': 'VueRouter',
            //     'element-ui': 'ELEMENT',
            // }
          }
        } else {
          // 为开发环境修改配置...
          // console.log(config);
          return {

          }
        }
      }
  }