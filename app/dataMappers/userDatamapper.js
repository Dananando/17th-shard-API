const database = require('../database');

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

    },

    async delete(id) {
        const query = {
            text: `DELETE FROM "user" WHERE id = $1 RETURNING id;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw new Error(error.message);
        }
    }
};

module.exports = userDatamapper;