'use strict'
const path = require('path')

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
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }

}
