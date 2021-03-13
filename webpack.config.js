const path = require('path');

module.exports = {
    entry: './src/browser.ts',
    mode: "production",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, "browser")
    },
    resolve: {
        extensions: ['.ts']
    }
};
