const database = require('../database');
const bcrypt = require('bcrypt');

const jwtService = require('../middlewares/jwtMiddleware');

const userDatamapper = {
    async getAll() {
        const query = {
            text: `SELECT username, email, registration_date FROM "user";`
        };

        try {
            const { rows } = await database.query(query);
            // console.log(rows);
            return rows;
        } catch (error) {
            console.trace(error);
            throw new Error(error.message);
        }
    },

    async getOne(id) {
        const query = {
            text: `SELECT username, email, registration_date FROM "user" WHERE id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log(rows[0]);
            return rows[0];
        } catch (error) {
            console.trace(error.message);
            throw new Error(error.message);
        }
    },

    async getBooksByAuthor(id) {
        const query = {
            text: `SELECT bookWrite.title, bookWrite.cover_image, author.first_name, author.last_name
            FROM bookWrite
            JOIN author
            ON bookWrite.author_id = author.id
            WHERE bookWrite.author_id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log(rows);
            return rows;
        } catch (error) {
            console.trace(error.message);
            throw new Error(error.message);
        }
    },

    async create(user) {
        // configuring the salt then hashing the password
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(user.password, salt);

        // Prepared query to avoid SQL injection
        const query = {
            text: `INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email;`,
            values: [user.userName, user.email, hashedPassword]
        };

        try {
            const { rows } = await database.query(query);
            if (rows[0]) {
                return rows[0];
            } else {
                return 'Error during user creation.'
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async login(user) {
        const query = {
            text: `SELECT * FROM "user" WHERE username = $1`,
            values: [user.userName]
        };

        try {
            const { rows } = await database.query(query);
            const foundUser = rows[0];
            console.log('Found user : ', foundUser);
            if(foundUser) {
                const match = bcrypt.compareSync(user.password, foundUser.password);
                console.log('match : ', match);
                if(match === true) {
                    const token = {
                        id: jwtService.generateTokenForUser(foundUser),
                        logged: true,
                        user: foundUser 
                    };
                    console.log(`The token : `, token);
                    return token
                }
                return `Wrong password. Please try again.`;
            }
            return `Username not found. Please try again.`;
        } catch (error) {
            throw error;
        }
    },

    async delete(id) {
        const query = {
            text: `DELETE FROM "user" WHERE id = $1 RETURNING id;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log('Rows[0] : ', rows[0]);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw new Error(error.message);
        }
    }
};

module.exports = userDatamapper;