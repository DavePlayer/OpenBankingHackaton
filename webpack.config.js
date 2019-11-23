const path = require("path")

// Require the new plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest')
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.join(__dirname, "www"),
        filename: "index_bundle.js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"  // Specify the HTML template to use
        }),
        new WebpackPwaManifest({
            filename: "manifest.json",
            name: 'My Progressive Web App',
            short_name: 'MyPWA',
            description: 'My awesome Progressive Web App!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
              {
                src: path.resolve('icon-192x192.png'),
                size: '192x192'
              }
            ]
          }),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
          })
    ],
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 4000,
        historyApiFallback: true,
    },
}
