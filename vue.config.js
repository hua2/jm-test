module.exports = {
    // 选项...
    // 项目绝对路径 默认/ 如果是在服务器的子目录下需要加入目录名词
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    // 输出目录
    outputDir: 'dist',
    // 静态文件输入目录
    assetsDir: 'static',
    // 文件名是否hash
    filenameHashing: false,
};
