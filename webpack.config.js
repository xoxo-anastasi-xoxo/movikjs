const path = require('path');
console.log(path.resolve(__dirname, 'movikjs-build'))
module.exports = {
    entry: './movikjs/index.ts',
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'movik.js',
        library: 'MovikJS',
        path: path.resolve(__dirname, 'movikjs-build')
    },

};
