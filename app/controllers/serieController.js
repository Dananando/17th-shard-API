const serieDatamapper = require('../dataMappers/serieDatamapper');

const serieController = {
    async getAll(_, response, next) {
        try {
            const series = await serieDatamapper.getAll();
            if (series) {
                response.status(200).json(series);
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
            const theSerie = await serieDatamapper.getOne(id);
            if (theSerie) {
                response.status(200).json(theSerie);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
        }
    },

    async saveOrUpdate(request, response, next) {
        const serie = request.body;
        try {
            const savedSerie = await serieDatamapper.saveOrUpdate(serie);
            if (savedSerie) {
                response.status(201).json(savedSerie);
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
            const deletedSerie = await serieDatamapper.delete(id);
            if (deletedSerie) {
                // .json not very useful
                response.status(204).json(deletedSerie);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw error;
        }
    }
};

module.exports = serieController;