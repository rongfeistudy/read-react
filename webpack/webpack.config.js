const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/index.js',
    },
    context: path.resolve(__dirname, '../'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: /(?:react-master\/packages)|src/,
                options: {
                    babelrc: false,
                    exclude: /node_modules/,
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    esmodules: true,
                                    browsers: "> 0.25%, not dead"
                                },
                                debug: __debug,
                                modules: 'umd',
                                forceAllTransforms: !__debug,
                                useBuiltIns: false
                            }
                        ],
                        [
                            "@babel/preset-react",
                            {
                                development: true
                            }
                        ],
                        '@babel/preset-flow'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread'
                    ]
                }
            },
        ]
    },
    mode: 'development',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    plugins: [
        
    ],
    devServer: {
        port: 3100
    }
}