const { Router } = require('express');
const router = Router();

// Import the controllers to retrieve / modify the relevant datas
const authorController = require('./controllers/authorController');
// const bookController = require('./controllers/bookController');

// Test page
router.get('/', (request, response) => {
    response.send('It\'s running');
});

// Get all the authors
router.get('/authors', authorController.getAll);

// Get one author - Why the RegExp: to show off. And to indicate we absolutely want a number for the id
router.get('/authors/:id(\\d+)', authorController.getOne);

// Insert a new author
router.post('/authors/save', authorController.saveOrUpdate);

// Update a new author
router.patch('/authors/update', authorController.saveOrUpdate);

// Delete an author
router.delete('/authors/:id(\\d+)', authorController.delete);

// Get all the books
// router.get('/books', bookController.getAll);


// Route 404
router.use((request, response) => {
    response.status(404).json(`Endpoint ${request.url} not found`);
});

module.exports = router;