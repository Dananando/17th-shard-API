require('dotenv').config();

const authorDatamapper = require('./app/dataMappers/authorDatamapper');

// authorDatamapper.getAll();
authorDatamapper.getOne(1);