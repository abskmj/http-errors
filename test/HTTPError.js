const expect = require('chai').expect;

const HTTPError = require('../index').HTTPError;

describe('HTTPError', () => {
    let status = 201;
    let message = 'Created';
    let extra = 'id: 001';
    let info = 'New resource created';

    let error = new HTTPError(201, message, extra, info);

    it('should be an Error', () => {
        expect(error instanceof Error).to.be.true;
    });

    it('should accept message, status, extra & info', () => {
        expect(error).to.have.a.property('message');
        expect(error.message).to.be.equal(message);

        expect(error).to.have.a.property('status');
        expect(error.status).to.be.equal(status);

        expect(error).to.have.a.property('extra');
        expect(error.extra).to.be.equal(extra);

        expect(error).to.have.a.property('info');
        expect(error.info).to.be.equal(info);
    });

});
