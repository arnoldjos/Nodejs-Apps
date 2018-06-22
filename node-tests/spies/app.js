const db = require('./db');

module.exports.handleSignup = (email, password) => {
    db.saveUser({email, password});
    //check if email already exists
}