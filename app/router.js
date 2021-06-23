const { Router } = require('express');
const router = Router();

const authorController = require('./controllers/authorController');

// Test page
router.get('/', (request, response) => {
    response.send('It\'s running');
});

// Get all the authors
router.get('/authors', authorController.getAll);

// Get one author
// Why the RegExp: to show off. And to indicate we absolutely want a number for the id
router.get('/authors/:id(\\d+)', authorController.getOne);

module.exports = router;