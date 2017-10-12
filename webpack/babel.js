module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test:  /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react', 'react-hmre'],
                        plugins: [
                            ["babel-plugin-styled-components", { "ssr": true }]
                        ]
                    },
                }
            ],
        },
    };
};
