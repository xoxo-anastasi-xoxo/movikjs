const path = require('path');

module.exports = {
    entry: './movikjs/index.ts',

    module: {
        rules: [
            {
                test: /\.ts?$/,
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
        path: path.resolve(__dirname, 'build')
    },

};
