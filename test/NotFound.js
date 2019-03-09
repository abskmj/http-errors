const expect = require('chai').expect;

const errors = require('../index');

describe('NotFound', () => {
    let error = new errors.NotFound();

    it('should be a HTTPError and an Error', () => {
        expect(error instanceof errors.HTTPError).to.be.true;
        expect(error instanceof Error).to.be.true;
    });

    it('should have a preset status', () => {
        expect(error.status).to.be.equal(404);
    });

    it('should have a default message', () => {
        let err = new errors.NotFound();

        expect(err.message).to.be.equal('Not Found');
    });

});
