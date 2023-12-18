module.exports = {
    mode: 'development',
    entry: './src/main.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js',
        ],
    },
};