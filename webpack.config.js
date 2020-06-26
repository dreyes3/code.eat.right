const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssEtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: ["./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contentHash].bundle.js",
    },
    devServer: {
        contentBase: "./dist",
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssEtractPlugin({
            filename: "[name].[contentHash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssEtractPlugin.loader, // Extract css into files
                    'css-loader'    // Turns CSS to commonjs
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ],
    },
};
