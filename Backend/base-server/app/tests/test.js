const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');

const server = require('../server');

const nockReply = {
    "status": "success",
    "details": "Service was pinged successfully"
}

//configuring Chai

const should = chai.should();
chai.use(chaiHttp);
const requester = chai.request(server).keepOpen();

function assertSuccess(res, status) {
    res.should.have.a.status(status);
    res.should.be.a('object');
}

function assertErrorResponse(res, status, errorCode, message, details) {
    res.should.have.status(status);
    res.body.should.be.a('object');
    res.body.should.have.property('errorCode');
    res.body.should.have.property('message');
    res.body.should.have.property('details');
    res.body.errorCode.should.equal(errorCode);
    res.body.message.should.equal(message);
    res.body.details.should.equal(details);
}

describe('Test cases', () => {
    describe('Ping - Test Cases', () => {
        it('Ping - success scenario', (done) => {
            nock(`http://localhost:5001`).get(`/api/ping`).reply(200);
            requester.get(`/api/ping`).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
    after((done) => {
        requester.close();
        done();
    })
})