const bookDatamapper = require('../dataMappers/bookDatamapper');

const bookController = {
    async getAll(_, response, next) {
        try {
            const books = await bookDatamapper.getAll();
            if (books) {
                response.status(200).json(books);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
        }
    },

    async getOne(request, response, next) {
        const id = Number(request.params.id);
        try {
            const theBook = await bookDatamapper.getOne(id);
            if (theBook) {
                response.status(200).json(theBook);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
        }
    },

    async saveOrUpdate(request, response, next) {
        const book = request.body;
        try {
            const savedBook = await bookDatamapper.saveOrUpdate(book);
            console.log('Saved book: ', savedBook);
            if (savedBook) {
                response.status(201).json(savedBook);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            response.status(500).json(error.message);
        }
    },

    async delete(request, response, next) {
        const id = Number(request.params.id);
        try {
            const deletedBook = await bookDatamapper.delete(id);
            if (deletedBook) {
                response.status(204).json(deletedBook);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = bookController;