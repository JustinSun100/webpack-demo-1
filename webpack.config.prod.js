const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             // you can specify a publicPath here
                //             // by default it use publicPath in webpackOptions.output
                //             publicPath: '../'
                //         }
                //     },
                //     "css-loader"
                // ]
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}



