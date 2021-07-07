const database = require('../database');

const serieDatamapper = {
    async getAll() {
        const query = {
            text: `SELECT * FROM "serie";`
        };

        try {
            const { rows } = await database.query(query);
            // console.log(rows);
            return rows;
        } catch (error) {
            console.trace(error.message);
            throw new Error(error.message);
        }
    },

    async getOne(id) {
        const query = {
            text: `SELECT * FROM "serie" WHERE id = $1;`,
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

    async getBooksBySerie(id) {
        const query = {
            text: `SELECT book.title, book.cover_image, serie.label
            FROM book
            JOIN serie
            ON book.serie_id = serie.id
            WHERE book.serie_id = $1;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log(rows);
            return rows;
        } catch (error) {
            console.trace(error.message);
            throw new Error(error.message) ;
        }
    },

    async saveOrUpdate(serie) {
        if (serie.id) {
            const query = {
                text: `UPDATE "serie" SET label = $1 WHERE id =  $2 RETURNING id;`,
                values: [serie.label, serie.id]
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
                text: `INSERT INTO "serie" (label) VALUES ($1) RETURNING id;`,
                values: [serie.label]
            };
            try {
                const { rows } = await database.query(query);
                // serie.id = rows[0].id;
                return rows[0];
            } catch (error) {
                console.trace(error);
                throw error;
            }
        }
    },

    async delete(id) {
        const query = {
            text: `DELETE FROM serie WHERE id = $1 RETURNING id;`,
            values: [id]
        };

        try {
            const { rows } = await database.query(query);
            console.log(rows);
            return rows[0];
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = serieDatamapper;