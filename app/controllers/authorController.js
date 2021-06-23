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
            if(theAuthor) {
                response.status(200).json(theAuthor);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
        }
    },
    
    async saveOrUpdate(request, response, next) {
        const author = request.body;
        try {
            const savedAuthor = await authorDatamapper.saveOrUpdate(author);
            response.status(201).json(savedAuthor);   
        } catch (error) {
            console.trace(error);
            response.status(500).json(error.message);
        }
    }
};

module.exports = authorController;