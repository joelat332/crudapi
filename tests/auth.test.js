// Import the necessary modules and functions
const jwt = require('jsonwebtoken');
const authToken = require('../middleware/authorization'); // Adjust the path to match your file structure

// Mock request and response objects
const req = {
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', // Replace with a valid access token
    },
};

const res = {
    sendStatus: jest.fn(),
    json: jest.fn(),
};

const next = jest.fn();

// Mock the verify function from the jsonwebtoken module
jest.mock('jsonwebtoken', () => ({
    verify: jest.fn(),
}));

describe('authToken middleware', () => {
    it('should call next() if a valid token is provided', () => {
        // Mock successful token verification
        jwt.verify.mockImplementationOnce((token, secret, callback) => {
            callback(null, { username: 'testuser' }); // Replace with your user object
        });

        authToken(req, res, next);

        expect(next).toHaveBeenCalled();
    });

});
