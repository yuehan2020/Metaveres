module.exports = {
    lintOnSave: false, //关闭语法检查
    // 开启代理服务器
    // devServer: {
    //   // Proxy: 'http://localhost:4000'
    // }
    devServer: {
        proxy: {
            '/api': {
                target: 'https://autumnfish.cn/',
                // secure:true,
                changeOrign: true, // 请求头hots
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },


}