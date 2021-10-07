const { create } = require('../dataMappers/userDatamapper');
const userDatamapper = require('../dataMappers/userDatamapper');

const userController = {
    async getAll(_, response, next) {
        try {
            const users = await userDatamapper.getAll();
            if (users) {
                response.status(200).json(users);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);
            throw new Error(error.message);
        }
    },

    async getOne(request, response, next) {
        const id = Number(request.params.id);
        try {
            const oneUser = await userDatamapper.getOne(id);
            if (oneUser) {
                response.status(200).json(oneUser);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error.message);
            throw new Error(error.message);
        }
    },

    async create(request, response, next) {
        const newUserBody = request.body;
        try {
            const newUser = await userDatamapper.create(newUserBody);
            if(newUserBody) {
                response.status(201).json(newUser);
            } else {
                next();
            }
        } catch (error) {
            throw new Error(error.message);
        }

    },

    async delete(request, response, next) {
        const id = Number(request.params.id);
        try {
            const deletedUser = await userDatamapper.delete(id);
            if (deletedUser) {
                // The id of the deleted user is returned
                response.status(204).json(deletedUser);
            } else {
                next();
            }
        } catch (error) {
            console.trace(error);            
            throw new Error(error.message);
        }
    }
};

module.exports = userController;