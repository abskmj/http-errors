const expect = require('chai').expect;

const errors = require('../index');

describe('ResourceNotFound', () => {
    let error = new errors.ResourceNotFound();

    it('should be a NotFound and an Error', () => {
        expect(error instanceof errors.NotFound).to.be.true;
        expect(error instanceof Error).to.be.true;
    });

    it('should have a preset status', () => {
        expect(error.status).to.be.equal(404);
    });

    it('should have a preset message', () => {
        let err = new errors.ResourceNotFound();

        expect(err.message).to.be.equal('Requested resource does not exist');
    });

});
