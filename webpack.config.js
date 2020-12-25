const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
    }
};