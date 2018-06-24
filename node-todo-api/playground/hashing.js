const { SHA256 } = require('crypto-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

const hashedPassword = '$2a$10$Z5IckF3XZM2OqA4KVpWtbOaLLntualRrXCwyeK.PRItPukYobEYBm';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});


// const token = jwt.sign(data, 'secret123');
// console.log(token);

// const decoded = jwt.verify(token, 'secret123');
// console.log('decoded',decoded);


// console.log(message);
// console.log(hash);

// const data = {
//     id: 4
// };

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed.')
// }

