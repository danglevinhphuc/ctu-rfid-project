var configValues = require('./config')

module.exports = {
	database : `mongodb://${ configValues.username }:${ configValues.password }@ds135384.mlab.com:35384/projectrfid`,
}