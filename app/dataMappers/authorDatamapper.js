const { getAll, getOne } = require('../controllers/authorController');
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
        }
    }
};

module.exports = authorDatamapper;