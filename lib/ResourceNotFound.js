const NotFound = require('./NotFound');

module.exports = class ResourceNotFound extends NotFound {
    constructor(extra, info) {
        super('Requested resource does not exist', extra, info);
    }
}
