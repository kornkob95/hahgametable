var jsonConfig;
try {
	jsonConfig = require('../config.json');
}
catch (e) {
	console.log('Could not load config.json');
	jsonConfig = {};
}
// defaults for config
module.exports = {
	port: jsonConfig.port || process.env.PORT || 7878,
	minPlayers: jsonConfig.minPlayers || 4,
	maxPlayers: jsonConfig.maxPlayers || 12,
	syncInterval: jsonConfig.syncInterval || 100,
	gaPropertyId: jsonConfig.gaPropertyId || process.env.GA_PROPERTY_ID,
	githubAccessToken: jsonConfig.githubAccessToken,
	useSSL: jsonConfig.useSSL !== undefined ? jsonConfig.useSSL : !!process.env.SSL_KEY,
	sslKey: jsonConfig.sslKey || process.env.SSL_KEY || '',
	sslCert: jsonConfig.sslCert || process.env.SSL_CERT || '',
	sslIntermediate: jsonConfig.sslIntermediate || process.env.SSL_INTERMED || ''
}
