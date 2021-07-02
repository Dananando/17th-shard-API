const { Router } = require('express');
const router = Router();

// Import the controllers to retrieve / modify the relevant datas
const authorController = require('./controllers/authorController');
const bookController = require('./controllers/bookController');
const serieController = require('./controllers/serieController');

// Test page
router.get('/', (_, response) => {
    response.send('It\'s running');
});

/* --------------
 AUTHORS ROUTES
------------------*/

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


/*--------------------
BOOKS ROUTES 
------------------------*/
// Get all the books
router.get('/books', bookController.getAll);

// Get one book
router.get('/books/:id(\\d+)', bookController.getOne);

// Insert a new book
router.post('/books/save', bookController.saveOrUpdate);

// Update a new book
router.patch('/books/update', bookController.saveOrUpdate);

// Delete an book
router.delete('/books/:id(\\d+)', bookController.delete);


/*--------------------
SERIES ROUTES 
------------------------*/
// Get all the series
router.get('/series', serieController.getAll);

// Get one serie
router.get('/series/:id(\\d+)', serieController.getOne);

// Insert a new serie
router.post('/series/save', serieController.saveOrUpdate);

// Update a new serie
router.patch('/series/update', serieController.saveOrUpdate);

// Delete a serie
router.delete('/series/:id(\\d+)', serieController.delete);

/* --------------
 BOOKS + SERIES ROUTES 
------------------*/


// Route 404
router.use((request, response) => {
    response.status(404).json(`Endpoint ${request.url} not found`);
});

module.exports = router;