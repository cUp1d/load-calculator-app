module.exports = {
    module: {
        rules: [
            {
                test: /\.(xls)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
