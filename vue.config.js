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
    pages: {
        mobile: {
            template: "public/mobile.html",
            entry: "src/views/mobile/mobile.main.js",
            filename: "mobile.html",
            title: "mobile",
            keywords: "333",
            description: "444",
        },
        index: {
            template: "public/index.html",
            entry: "src/main.js",
            filename: "index.html",
            title: "index",
            keywords: "333",
            description: "444",
        }

    }

}