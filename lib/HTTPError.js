module.exports = class HTTPError extends Error {
    constructor(status, message, extra, info) {
        super(message);

        this.name = this.constructor.name;

        this.status = status;
        this.extra = extra;
        this.info = info;
    }
}
