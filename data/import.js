require('dotenv').config();

const database = require('../app/database');

const authors = require('../data/author.json');
const books = require('../data/book.json');
const series = require('../data/serie.json');

const importAPP = {
    async generalImport() {

    },

    async importAuthors() {
        authors.map((author) => {
            const query = {
                text: `INSERT INTO "author"(first_name, last_name, birth_date, birth_place) VALUES ($1, $2, $3, $4);`,
                values: [author["first_name"], author["last_name"], author["birth_date"], author["birth_place"]]
            };
            try {
                const theImport = await database.query(query);
            } catch (error) {
                console.trace(error);
                throw new Error(error);
            }
        });
    },

    async importBooks() {
        books.map((book) => {
            const query = {
                text: `INSERT INTO "book"(title, serie_id, cover_image, summary) VALUES ($1, $2, $3, $4);`,
                values: [book["title"], book["serie_id"], book["cover_image"], book["summary"]]
            };
            try {
                const theImport = await database.query(query);
            } catch (error) {
                console.trace(error);
                throw new Error(error);
            }
        });
    },

    async importSerie() {
        series.map((serie) => {
            const query = {
                text: `INSERT INTO "serie"(label) VALUES ($1);`,
                values: [serie["label"]]
            };
            try {
                const theImport = await database.query(query);
            } catch (error) {
                console.trace(error);
                throw new Error(error);
            }
        });
    },
};