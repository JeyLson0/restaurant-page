const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]'
    }, 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'restaurant-page',
            filename: 'index.html',
            template: 'src/template.html',
            inject: 'body',
            minify: false,
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    },
    devtool: 'inline-source-map'

}