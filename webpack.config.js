const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./webpack/paths');

module.exports = {
    entry: commonPaths.entryPath,
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: `${commonPaths.jsFolder}/[name].[hash].js`,
        path: commonPaths.outputPath,
        chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath
        })
    ],
    devServer: {
        port: 8051,
        historyApiFallback: true
    }
};
