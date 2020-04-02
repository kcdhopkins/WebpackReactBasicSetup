
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {test: /\.txt/, use: 'raw-loader'},
            {test: /\.css/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
            {test: /\.html$/, use: [ {loader: 'html-loader', options: {minimize: true}}]},
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use:{loader: 'babel-loader', options: {presets:['@babel/preset-env', '@babel/preset-react']}}}, 
            {test: /\.(png|jpg|gif)$/, use: {loader: 'file-loader'}} 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html', title: "Webpack Setup"}),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        open: true
    },
    mode: 'development'
}
