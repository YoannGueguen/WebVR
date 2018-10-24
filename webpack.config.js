const configuration = {};

require('./webpack/entry')(configuration);
require('./webpack/output')(configuration);
require('./webpack/rules')(configuration);
require('./webpack/resolve')(configuration);
require('./webpack/alias')(configuration);
require('./webpack/devServer')(configuration);
require('./webpack/performance')(configuration);
require('./webpack/stats')(configuration);
require('./webpack/plugins')(configuration);

module.exports = configuration;