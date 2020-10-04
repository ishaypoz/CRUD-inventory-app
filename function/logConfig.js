const winston = require('winston');
//logger configuration
const logConfiguration = {
	transports: [
		new winston.transports.File({
			filename: './logs.log',
			format: winston.format.combine(winston.format.timestamp(), winston.format.json())
		})
	]
};
//create logger
exports.logger = winston.createLogger(logConfiguration);
