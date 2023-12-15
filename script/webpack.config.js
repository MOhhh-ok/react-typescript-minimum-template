module.exports = {
    mode: 'development',
    entry: {
        root1: './src/root1.tsx',
        root2: './src/root2.tsx'
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js',
        ],
    },
};