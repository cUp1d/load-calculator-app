module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('xls')
            .test(/\.xls$/)
            .use('file-loader')
            .loader('file-loader')
            .end()
    }
}