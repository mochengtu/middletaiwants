const {createProxyMiddleware} = require('http-proxy-middleware');

/**
 * 代理配置
 */
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://10.1.14.82:2001',
            changeOrigin: true,
        }),
        '/admin-web',
        createProxyMiddleware({
            target: 'http://10.1.14.82:2001',
            changeOrigin: true,
            pathRewrite: {
                "^/admin-web": "/admin-web"
            }
        })
    );
};

