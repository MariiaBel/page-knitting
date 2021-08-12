module.export = {
    productionSourceMap: true,
    assetsDir: 'assets',
    filenameHashing: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/assets/sass/utils/vars.sass"`
            }
        }
    }
}