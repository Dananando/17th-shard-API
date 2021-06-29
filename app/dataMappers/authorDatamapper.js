const database = require('../database');

const authorDatamapper = {
    async getAll() {
        const query = {
            text: `SELECT * FROM "author";`
        };

        try {
            const { rows } = await database.query(query);
            // console.log(rows);
            return rows;
        } catch (error) {
            console.trace(error);
        }
    },

    async getOne(id) {
        const query = {
            text: `SELECT * FROM "author" WHERE id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log(rows[0]);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw error;
        }
    },

    async saveOrUpdate(author) {
        if (author.id) {
            const query = {
                text: `UPDATE "author" SET first_name = $1, last_name = $2, birth_date = $3,birth_place = $4 WHERE id = $5 RETURNING id;`,
                values: [author.first_name, author.last_name, author.birth_date, author.birth_place, author.id]
            };
            try {
                const { rows } = await database.query(query);
                return rows[0];
            } catch (error) {
                console.trace(error);
                throw error;
            }
        } else {
            const query = {
                text: `INSERT INTO "author" (first_name, last_name, birth_date, birth_place) VALUES ($1, $2, $3, $4) RETURNING id;`,
                values: [author.first_name, author.last_name, author.birth_date, author.birth_place]
            };
            try {
                const { rows } = await database.query(query);
                // author.id = rows[0].id;
                return rows[0];
            } catch (error) {
                console.trace(error);
                throw error;
            }
        }
    },

    async delete(id) {
        const query = {
            text: `DELETE FROM author WHERE id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = authorDatamapper;