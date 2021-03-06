const database = require('../database');

const bookDatamapper = {
    async getAll() {
        const query = {
            text: `SELECT * FROM "book";`
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
            text: `SELECT * FROM "book" WHERE id = $1;`,
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

    async saveOrUpdate(book) {
        if (book.id) {
            const query = {
                text: `UPDATE "book" SET title = $1, serie_id = $2, cover_image = $3,summary = $4 WHERE id = $5 RETURNING id;`,
                values: [book.title, book.serie_id, book.cover_image, book.summary,  book.id]
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
                text: `INSERT INTO "book" (title, cover_image, summary, serie_id) VALUES ($1, $2, $3, $4) RETURNING id;`,
                values: [book.title, book.cover_image, book.summary, book.serie_id]
            };
            try {
                const { rows } = await database.query(query);
                // book.id = rows[0].id;
                return rows[0];
            } catch (error) {
                console.trace(error);
                throw error;
            }
        }
    },

    async delete(id) {
        const query = {
            text: `DELETE FROM book WHERE id = $1;`,
            values: [id]
        };

        try {
            const deletedBook = await database.query(query);
            return deletedBook;
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = bookDatamapper;