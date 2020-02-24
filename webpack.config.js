const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [ new optimizeCssAssetsPlugin({}) ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /style\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        })
    ] 

};