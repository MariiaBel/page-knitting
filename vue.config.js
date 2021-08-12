module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://mariiabel.github.io/vue3-gape-knitting/production/'
        : '/',
    outputDir: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'dev',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: true
}