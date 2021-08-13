module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/page-knitting/production/'
        : '/',
    outputDir: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'dev',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: true
}