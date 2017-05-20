const path = require('path');

module.exports = function() {
    return {
        devServer: {
            contentBase: path.join(__dirname, '../build'),
            clientLogLevel: "warning"
        }
    }
};
