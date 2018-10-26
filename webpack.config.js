const configuration = {};
const environment = require('./env');

if(!environment.ENVIRONMENT) {
    throw `The .env file incorrectly configured or doesn't exist. Please copy .env.dist file to .env file.`;
}

require('./webpack/entry')(configuration);
require('./webpack/output')(configuration);
require('./webpack/rules')(configuration);
require('./webpack/resolve')(configuration);
require('./webpack/alias')(configuration);
require('./webpack/devServer')(configuration);
require('./webpack/performance')(configuration);
require('./webpack/stats')(configuration);
require('./webpack/node')(configuration);
require('./webpack/plugins')(configuration);

module.exports = configuration;