const bcrypt = require('bcrypt');

const passwordHashing = {
    async hashFunction(passwordToHash) {
        // configuring the salt then hashing the password
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(passwordToHash, salt);

        return hashedPassword;
    }
};

module.exports = passwordHashing;