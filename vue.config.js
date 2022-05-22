'use strict'
const path = require('path')
// 打包优化
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let isProduction = process.env.NODE_EMV

function resolve (dir) {
  return path.join(__dirname, dir)
}
const name = '小涵宇宙' // page title
module.exports = {
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器
  // devServer: {
  //   // Proxy: 'http://localhost:4000'
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        // secure:true,
        changeOrign: true, // 请求头hots
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  css:{
    loaderOptions:{
      sass:{
        prependData:`@import "./src/common/css/global.scss";`
      }
    }
  },
  configureWebpack: config=>{
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    if (isProduction=='production') {
      
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions:{
            // 删除console
            warnings:false,
            compress:{
              drop_debugger:true,
              drop_console:true,
              pure_funce:['console.log']
            }
          },
          sourceMap:false,
          parallel:true
        })
      )
    }

    



    return{
      name: name,
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }

  }

}
