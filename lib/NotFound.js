const HTTPError = require('./HTTPError');

module.exports = class NotFound extends HTTPError {
    constructor(message = 'Not Found', extra, info) {
        super(404, message, extra, info);
    }
}
