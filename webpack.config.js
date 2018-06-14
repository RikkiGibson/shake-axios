const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    entry: path.join(__dirname, 'index.js'),
    module: {
        rules: [
            {
                include: path.resolve(__dirname, "node_modules/axios"),
                sideEffects: false
            }
        ]
    }
};
