const database = require('../database');
const fetch = require('node-fetch');

const serieDatamapper = {
    async getAll() {
        const query = {
            text: `SELECT * FROM "serie";`
        };

        try {
            const { rows } = await database.query(query);
            // Retrieve weather from Brussels - Belgium
            const weatherData = await fetch('https://www.metaweather.com/api/location/968019')
            const weatherDataJson = await weatherData.json();
            console.log('Weather in Brussels: ', weatherDataJson);
            return { rows, weatherDataJson };
        } catch (error) {
            console.trace(error);
        };


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
            console.trace(error);
            throw error;
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