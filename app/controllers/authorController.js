const authorDatamapper = require('../dataMappers/authorDatamapper');

const authorController = {
    async getAll(request, response, next) {
        try {
            const authors = await authorDatamapper.getAll();
            if (authors) {
                response.status(200).json(authors);
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
            const theAuthor = await authorDatamapper.getOne(id);
            if (theAuthor) {
                response.status(200).json(theAuthor);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error.message);
        }
    },

    async getBooksByAuthor(request, response, next) {
        const id = Number(request.params.id);
        try {
            const books = await authorDatamapper.getBooksByAuthor(id);
            if(books) {
                response.status(200).json(books);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error.message)
        }
    },

    async saveOrUpdate(request, response, next) {
        const author = request.body;
        try {
            const savedAuthor = await authorDatamapper.saveOrUpdate(author);
            console.log('Saved author: ', savedAuthor);
            if (savedAuthor) {
                response.status(201).json(savedAuthor);
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
            const deletedAuthor = await authorDatamapper.delete(id);
            if (deletedAuthor) {
                response.status(204).json(deletedAuthor);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = authorController;