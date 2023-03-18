const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/cliente/js/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/cliente/index.html',
            minify: {
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'productos.html',
            template: './src/cliente/productos.html'
        }),
        new htmlWebpackPlugin({
            filename: 'nosotros.html',
            template: './src/cliente/nosotros.html'
        }),
        new htmlWebpackPlugin({
            filename: 'contacto.html',
            template: './src/cliente/contacto.html'
        }),
    ]
};